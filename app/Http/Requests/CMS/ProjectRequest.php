<?php

namespace App\Http\Requests\CMS;

use Illuminate\Foundation\Http\FormRequest;

class ProjectTypeRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => ['sometimes'],
            'Name' => ['required', 'unique:project_types,name', 'string'],
            'Logo' => ['sometimes', 'file'],
            'Technologies' => ['required'],
            'Type' => ['required'],
            'Link' => ['required']
        ];
    }
}
