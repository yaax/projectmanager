import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    actions: {
        toggleStatus(task_id) {
            var task = this.store.peekRecord('task', task_id);
            if (task) {
                let tasks = this.store.peekAll('task');
                let status = $("#chk-"+task_id).prop('checked');
                task.set('status', $("#chk-"+task_id).prop('checked'));
                task.save();
                if (status) {
                    $("#task-"+task_id).css("text-decoration","line-through");
                } else {
                    $("#task-"+task_id).css("text-decoration","none");
                }
                renderTotals(tasks);
            }
        },
        editTask(task_id) {
            var task = this.store.peekRecord('task', task_id);
            var task_name=$("#task-name-input-"+task_id).val().trim();
            if (task) {
                if (task_name!=task.name) {
                    task.set('name', task_name);
                    task.save();
                    $("#task-name-"+task_id).text(task_name);
                }
            }
            $("#task-name-input-"+task_id).hide();
            $("#task-name-save-"+task_id).hide();
            $("#task-name-"+task_id).text(task_name).show();
        },
        deleteTask(task_id) {
            var task = this.store.peekRecord('task', task_id);
            var tasks = this.store.peekAll('task');

            function success() {
                renderTotals(tasks);
            }

            function failure(reason) {
                console.log(reason);
            }

            if (task) {
                task.destroyRecord().then(success).catch(failure);
            }
        },
        addTask() {
            var task = this.store.createRecord('task', {
                name: $("#add_task_name").val(),
                status: false
            });
            var tasks = this.store.peekAll('task');

            function success() {
                $("#add_task_name").val('');
                renderTotals(tasks);
            }

            function failure(reason) {
                console.log("add failed");
                console.log(reason);
            }

            task.save().then(success).catch(failure);
        }
    },
});
