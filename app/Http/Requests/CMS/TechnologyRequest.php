<?php

namespace App\Http\Requests\CMS;

use Illuminate\Foundation\Http\FormRequest;

class TechnologyRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['sometimes'],
            'Name' => ['required', 'unique:technologies,name', 'string'],
            'Logo' => ['sometimes', 'file'],
        ];
    }
}
