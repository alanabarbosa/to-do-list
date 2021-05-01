
        $(function(){

            const todoList = {
                $container: $('.todo-list'),
                $input: $('input:text'),
                $btn: $('.btn-addTask'),
                template: `
                    <label href="#" class="list-group-item list-group-item-action d-flex align-items-center">
                        <input type="checkbox" class="mr-2"> 
                        <span class="flex-grow-1"> </span>
                        <button type="button" class="btn btn-info btn-sm">Apagar</button>
                    </label>
                `,

                init: function(){
                    this.$input.on('keyup', (e) => {
                        let task = this.$input.val()
                        if(e.keyCode === 13 && task){
                            this.addTask(task)
                        }
                    })

                    this.$btn.on('click', e => {
                        let task = this.$input.val()
                        if(task){
                            this.addTask(task)
                        } 
                    })

                    this.$container.on('change', '[type="checkbox"]', e =>{
                        $(e.target).closest('.list-group-item').toggleClass('done')
                    })

                    this.$container.on('click', '.btn', e => {
                        var item = $(e.target).closest('.list-group-item')
                        this.deleteTask(item.index())
                    })
                },

                addTask: function(task){
                    let $newTask = $(this.template)
                    $newTask.find('span').text(task)

                    this.$container.append($newTask)
                    this.$input.val('').focus()
                },

                deleteTask: function(index){
                this.$container.find('.list-group-item').eq(index).fadeOut('fast', function(){
                    $(this).remove()
                   }) 
                }
                
            }

            todoList.init();
        })