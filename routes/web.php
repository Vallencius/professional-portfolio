<?php

use App\Http\Controllers\MainController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\CommisionController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
Route::get('/info', [MainController::class, 'info'])->name('info');

Route::prefix('admin')->group(function () {
  Route::middleware('guest')->get('/login', [LoginController::class, 'loginPage'])->name('admin.login');
  
  Route::middleware('guest')->post('/login/hit', [LoginController::class, 'login'])->name('admin.login.check');
  Route::middleware('auth')->get('/logout', [LoginController::class, 'logout'])->name('admin.logout');

  Route::middleware('auth')->get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
  
  Route::prefix('get')->group(function () {
    Route::middleware('auth')->get('/projects', [AdminController::class, 'getProjects'])->name('admin.getProjects');
    Route::middleware('auth')->get('/technologies', [AdminController::class, 'getTechnologies'])->name('admin.getTechnologies');
    Route::middleware('auth')->get('/projecttypes', [AdminController::class, 'getProjectTypes'])->name('admin.getProjectTypes');
  });
  
  Route::prefix('add')->group(function () {
    Route::middleware('auth')->post('/projects', [AdminController::class, 'addProjects'])->name('admin.addProjects');
    Route::middleware('auth')->post('/technologies', [AdminController::class, 'addTechnologies'])->name('admin.addTechnologies');
    Route::middleware('auth')->post('/projecttypes', [AdminController::class, 'addProjectTypes'])->name('admin.addProjectTypes');
  });
  
  Route::prefix('edit')->group(function () {
    Route::middleware('auth')->post('/projects', [AdminController::class, 'editProjects'])->name('admin.editProjects');
    Route::middleware('auth')->post('/technologies', [AdminController::class, 'editTechnologies'])->name('admin.editTechnologies');
    Route::middleware('auth')->post('/projecttypes', [AdminController::class, 'editProjectTypes'])->name('admin.editProjectTypes');
  });
});

Route::get('/instagram', function(){
  return redirect()->away('https://instagram.com/vallnxs.gvr');
})->name('instagram');

Route::get('/twitter', function(){
  return redirect()->away('https://twitter.com/Vallenciusx');
})->name('twitter');

Route::get('/youtube', function(){
  return redirect()->away('https://youtube.com/@VallenciusGavrielCh');
})->name('youtube');

Route::get('/tiktok', function(){
  return redirect()->away('https://tiktok.com/@vallenciusgavrielch');
})->name('tiktok');

Route::get('/discord', function(){
  return redirect()->away('https://discord.gg/fZmSYAaKGa');
})->name('discord');

Route::get('/github', function(){
  return redirect()->away('https://github.com/Vallencius');
})->name('github');

Route::get('/linkedin', function(){
  return redirect()->away('https://www.linkedin.com/in/vallencius-gavriel-alfredo-siswanto-8268b8228/');
})->name('linkedin');

Route::post('/email', [MainController::class, 'email'])->name('email');
Route::post('/order', [CommisionController::class, 'order'])->name('order');

Route::any('{url}', function(){
  return redirect('/');
})->where('url', '.*');