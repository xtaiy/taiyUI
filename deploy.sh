rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "更新" &&
git branch -M main &&
git remote add origin git@github .com:xtaiy/taiyUI-website.git &&
git push -f -u origin main &&
cd ..
echo https://xtaiy.github.io/taiyUI-website/index.html