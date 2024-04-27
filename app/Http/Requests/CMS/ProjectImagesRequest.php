<?php

namespace App\Http\Requests\CMS;

use Illuminate\Foundation\Http\FormRequest;

class ProjectImagesRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'IDProject' => ['required'],
            'Name' => ['required', 'unique:project_images,name', 'string'],
            'Image' => ['sometimes', 'file'],
        ];
    }
}
