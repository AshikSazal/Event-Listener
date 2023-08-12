<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $user = User::create([
            'name'=>$request->input('name'),
            'email'=>$request->input('email'),
            'password'=>Hash::make($request->input('password')),
        ]);

        $user->save();
        return ['user'=>$user];
    }

    public function login(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        if(!Auth::attempt(['email'=>$email, 'password'=>$password])){
            return ["error"=>"Invalid Emaill or Password"];
        }
        return ['succesful'=> "Login done"];
    }
}
