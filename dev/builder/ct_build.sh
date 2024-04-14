#!/usr/bin/env bash
sh ./build.sh
VERSION=$(grep '"version":' ./../../package.json | sed $'s/[\t\",: ]//g; s/version//g' | tr -d '[[:space:]]')
VERSION="${VERSION}_ct"
printf "Deleting intitial build zips...\n"
rm -rf ./release/*.tar.gz
rm -rf ./release/*.zip
mv ./release/ckeditor ./release/ckeditor4
printf "Copying extra plugins to release plugins...\n"
cp -r ./extra_plugins/* ./release/ckeditor4/plugins
printf "Zipping updated release...\n"
cd ./release
zip -r -qq ckeditor_$VERSION.zip ./ckeditor4/*
printf "Done!\n"
