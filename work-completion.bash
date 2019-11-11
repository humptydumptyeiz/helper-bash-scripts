#/usr/bin/env bash
function work_completion(){
  cd ~/work/repos
}

complete -F work_completion -A directory work
