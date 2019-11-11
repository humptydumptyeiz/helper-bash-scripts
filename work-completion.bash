#/usr/bin/env bash
function work_completion(){
  cd $WORKPATH
}

complete -F work_completion -A directory work
