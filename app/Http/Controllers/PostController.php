<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Events\PostCreated;

class PostController extends Controller
{
    public function store(Request $request){
        $post_data = $request->validate([
            'title'=>'required',
            'content'=>'required'
        ]);
        $post_data['user_id']=auth()->user()->id;
        Post::create($post_data);

        $data = ['title'=>$post_data['title'], 'author'=>auth()->user()->name];
        event(new PostCreated($data));
        
        return ['success'=>'Post Created'];
    }
}
