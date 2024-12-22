<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index()
    {
        return Todo::where('user_id', Auth::id())->get();  // Get to-do items for the logged-in user
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
        ]);

        $todo = new Todo;
        $todo->title = $request->title;
        $todo->user_id = Auth::id();
        $todo->save();

        return $todo;
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        $todo->title = $request->title;
        $todo->completed = $request->completed;
        $todo->save();

        return $todo;
    }

    public function destroy($id)
    {
        $todo = Todo::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        $todo->delete();
        return response()->json(['message' => 'Todo deleted successfully']);
    }
}
