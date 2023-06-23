<?php

namespace Services;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class BaseApiService
{
    public function success($message = 'Success', $data = null)
    {
        return new JsonResponse([
            'status' => 1,
            'message' => $message,
            'data' => $data
        ], 200);
    }

    public function error($message, $errorCode = 400)
    {
        throw new HttpResponseException(
            new JsonResponse([
                'status' => 2,
                'message' => $message,
            ], $errorCode)
        );
    }
}
