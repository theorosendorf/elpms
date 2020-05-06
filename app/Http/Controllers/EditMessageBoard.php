<?php

namespace App\Http\Controllers;

use Te7aHoudini\LaravelTrix\LaravelTrix;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Auth;
use App\Presenters\ProjectsPresenter;
use App\Presenters\MessageBoardsPresenter;
use App\Presenters\AccountsPresenter;
use App\Models\Project;
use App\Models\MessageBoard;
use App\Models\Account;
use App\Actions\MessageBoard\UpdateMessageBoardAction;

class EditMessageBoard extends Controller
{
    public function update(Account $account, Project $project, MessageBoard $messageBoard, Request $request)
    {
        (new UpdateMessageBoardAction($messageBoard, [
            'title' => $request->title,
            'messageboard-trixFields' => $request->get('messageboard-trixFields'),
            'attachment-messageboard-trixFields' => $request->get('attachment-messageboard-trixFields'),
            'category_id' => $request->category,
        ], Auth::user()))->execute();

        return redirect()->route('messageBoards.show', ['account' => $account, 'project' => $project, 'messageBoard' => $messageBoard]);
    }

    public function edit(Account $account, Project $project, MessageBoard $messageBoard)
    {
        return Inertia::render('MessageBoards/Update', [
            'account' => AccountsPresenter::make($account)->preset('basic'),
            'project' => ProjectsPresenter::make($project->load(['categories']))->only('id', 'name', 'categories')->get(),
            'messageBoard' => MessageBoardsPresenter::make($messageBoard->load(['category']))->preset('edit')->get(),
            'trix' => $this->trixEditor($messageBoard),
        ]);
    }

    private function trixEditor(MessageBoard $messageBoard)
    {
        return (new LaravelTrix)->make($messageBoard, 'content', ['id' => 'trix-input', 'containerElement' => 'div'])->__toString();
    }
}
