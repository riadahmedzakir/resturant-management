#!/bin/bash

export base_data_path='./mongodb/Data/*'

for dir in $base_data_path; do
  echo  "$(basename "$dir")"

  for file in $dir/*.json; do

    filex="$(basename -- "$file")"
    purefilename="${filex%%.*}"
    cmd='mongoimport --host localhost --port 27017 --db '$(basename $dir)' -c '$purefilename' --upsert --file  '$file
    echo $cmd
    $cmd >> log.txt
    $cmd

  done

done