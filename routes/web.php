<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\CommisionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MainController::class, 'home'])->name('home');
Route::get('/about', [MainController::class, 'about'])->name('about');
Route::get('/projects', [ProjectsController::class, 'projects'])->name('projects');
Route::post('/projects', [ProjectsController::class, 'projectsFilter'])->name('projects.filter');
Route::get('/project/{slug}', [ProjectsController::class, 'projectDetail'])->name('projectDetail');
Route::get('/commision', [MainController::class, 'commision'])->name('commision');
Route::get('/contact', [MainController::class, 'contact'])->name('contact');

Route::post('/email', [MainController::class, 'email'])->name('email');
Route::post('/order', [CommisionController::class, 'order'])->name('order');