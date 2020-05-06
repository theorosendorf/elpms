<?php

namespace App\Models\Concerns;

use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

trait CanMoved
{
    public function moveTo(Project $project): Model
    {
        return tap($this)->update([
            'project_id' => $project->id
        ])->fresh();
    }
}
