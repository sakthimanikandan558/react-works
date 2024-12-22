<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TextController extends Controller
{
    public function convertToUppercase(Request $request)
    {
        $validated = $request->validate([
            'text' => 'required|string'
        ]);

        $uppercaseText = strtoupper($validated['text']);

        return response()->json(['uppercaseText' => $uppercaseText]);
    }
}
