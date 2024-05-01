<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::middleware('guest')->get('/login', [LoginController::class, 'loginPage'])->name('admin.login');

Route::middleware('guest')->post('/login/hit', [LoginController::class, 'login'])->name('admin.login.check');

Route::middleware('auth')->group(function () {
    Route::get('/logout', [LoginController::class, 'logout'])->name('admin.logout');
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');

    Route::prefix('get')->group(function () {
        Route::get('/projects', [AdminController::class, 'getProjects'])->name('admin.getProjects');
        Route::get('/technologies', [AdminController::class, 'getTechnologies'])->name('admin.getTechnologies');
        Route::get('/projecttypes', [AdminController::class, 'getProjectTypes'])->name('admin.getProjectTypes');

        Route::get('/technologies/all', [AdminController::class, 'getAllTechnologies'])->name('admin.getAllTechnologies');
        Route::get('/projecttypes/all', [AdminController::class, 'getAllProjectTypes'])->name('admin.getAllProjectTypes');

        Route::get('/projectimages/{id}', [AdminController::class, 'getImages'])->name('admin.getImages');
    });

    Route::prefix('add')->group(function () {
        Route::post('/projects', [AdminController::class, 'addProjects'])->name('admin.addProjects');
        Route::post('/technologies', [AdminController::class, 'addTechnologies'])->name('admin.addTechnologies');
        Route::post('/projecttypes', [AdminController::class, 'addProjectTypes'])->name('admin.addProjectTypes');
        Route::post('/projectimages', [AdminController::class, 'addProjectImages'])->name('admin.addProjectImages');
    });

    Route::prefix('edit')->group(function () {
        Route::post('/projects', [AdminController::class, 'editProjects'])->name('admin.editProjects');
        Route::post('/technologies', [AdminController::class, 'editTechnologies'])->name('admin.editTechnologies');
        Route::post('/projecttypes', [AdminController::class, 'editProjectTypes'])->name('admin.editProjectTypes');
        Route::post('/projectimages', [AdminController::class, 'editProjectImages'])->name('admin.editProjectImages');
    });

    Route::prefix('delete')->group(function () {
        Route::get('/projects/{id}', [AdminController::class, 'deleteProjects'])->name('admin.deleteProjects');
        Route::get('/technologies/{id}', [AdminController::class, 'deleteTechnologies'])->name('admin.deleteTechnologies');
        Route::get('/projecttypes/{id}', [AdminController::class, 'deleteProjectTypes'])->name('admin.deleteProjectTypes');
        Route::get('/projectimages/{id}', [AdminController::class, 'deleteProjectImages'])->name('admin.deleteProjectImages');
    });
});