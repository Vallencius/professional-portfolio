<?php

namespace Services;

use Exception;
use Services\BaseApiService;

class LoginService extends BaseApiService
{
    const STATUS_LOGIN_SUCCESS = 0;
    const STATUS_LOGIN_FAILED = 1;

    public function __construct()
    {
    }
}
