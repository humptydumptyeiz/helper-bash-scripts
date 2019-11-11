Save the script in ~/.script and add the following to ~/.bashrc

for filename in ~/.scripts/*.sh; do
  source $filename
done
