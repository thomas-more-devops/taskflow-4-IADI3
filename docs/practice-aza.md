# Git Practice - aza

## git log --oneline (before rebase)
```
2c89f3f practice: add line 4
5e15b41 practice: add line 3
106a6ad practice: add line 2
4dc0311 practice: add line 1
8067e50 Revise MIT License section in README.md
dacab6d Fix formatting in course context section
e0f6c45 Update course context in README.md
c3ab76b Update course context in README.md
b880593 Update README for version 1.4.0 changes
73c9456 Merge branch 'main' of https://github.com/massirr/w2-taskflow-files
35d9adc Add task priorities, fixed screenshots
164cfeb Fix screenshot links to use image syntax
16c965c Implement dark/light theme toggle feature
dc061bc Implement theme toggle functionality in index.html
a67918e Add dark mode toggle button styles
d80c735 Refactor CSS variables for improved theming
f3ab467 Define theme colors and variables in main.css
9edc390 Merge pull request #28 from thomas-more-devops/heronova149-docs/issues-template
ede464f Update issue templates
3022d06 Merge pull request #27 from thomas-more-devops/feature/task-categories
2aeb1a0 feat: add task categories with badges and filter bar
879deb3 Merge pull request #23 from thomas-more-devops/fix/all
01d53c0 Update README with new version and screenshots
b508dc0 fix: moved mobile screenshot 2 to /docs
9bb899d fix: moved mobile screenshot 1 to /docs
1b603f7 fix: moved screenshot to /docs
a3aa0c9 docs: Uploaded screenshots for readme.md
f4caab4 fix: pull request template
780acc2 Merge pull request #21 from thomas-more-devops/docs/readme
86ada6e Change LICENSE to LICENSE.md and update license link
e7aff2e Merge pull request #20 from thomas-more-devops/prep/pr-template
6b5b9d7 docs: add pull request template
2315324 Added CONTRIBUTING.md in docs
78823e5 Added ARCHITECTURE.md in docs
a2f1691 Add MIT License to the project
fc88d81 Delete styles/LICENSE.md
d8b1a03 Docs D: Add MIT License file to styles directory
777b5dd Merge pull request #19 from thomas-more-devops/code/js-comments-errors
2f1d058 fix: add comments and error handling to app.js
f0c921e Merge pull request #18 from thomas-more-devops/code/css-comments
aa19918 Add comments for clarity in main.css
ce130ac Merge pull request #17 from thomas-more-devops/docs/readme
44c1f68 Add comments to HTML structure for clarity
183ff4d Update README with correct information
edea5c9 Merge pull request #8 from thomas-more-devops/fix/setup-paths
727c5ee docs: fix folder name and upstream line in SETUP.md
a528a6c Remove contributing guidelines section from setup
21071c9 Merge pull request #6 from thomas-more-devops/fix/features-links
a0c8bf2 docs: remove CONTRIBUTING.md link from FEATURES.md
5c89208 Merge pull request #7 from thomas-more-devops/docs/setup
eadc82b docs: drop link to ARCHITECTURE.md from FEATURES.md
ffbbdbd Add TaskFlow setup guide
2835525 Merge pull request #5 from thomas-more-devops/docs/features
dd6bf45 docs: add FEATURES.md
963925f Add files
```

## git log --oneline (after rebase)
```
e069115 practice: add line 4
a9f012b practice: add line 3 (reworded)
7ab6c5c practice: add line 1
8067e50 Revise MIT License section in README.md
dacab6d Fix formatting in course context section
e0f6c45 Update course context in README.md
c3ab76b Update course context in README.md
b880593 Update README for version 1.4.0 changes
73c9456 Merge branch 'main' of https://github.com/massirr/w2-taskflow-files
35d9adc Add task priorities, fixed screenshots
164cfeb Fix screenshot links to use image syntax
16c965c Implement dark/light theme toggle feature
dc061bc Implement theme toggle functionality in index.html
a67918e Add dark mode toggle button styles
d80c735 Refactor CSS variables for improved theming
f3ab467 Define theme colors and variables in main.css
9edc390 Merge pull request #28 from thomas-more-devops/heronova149-docs/issues-template
ede464f Update issue templates
3022d06 Merge pull request #27 from thomas-more-devops/feature/task-categories
2aeb1a0 feat: add task categories with badges and filter bar
879deb3 Merge pull request #23 from thomas-more-devops/fix/all
01d53c0 Update README with new version and screenshots
b508dc0 fix: moved mobile screenshot 2 to /docs
9bb899d fix: moved mobile screenshot 1 to /docs
1b603f7 fix: moved screenshot to /docs
a3aa0c9 docs: Uploaded screenshots for readme.md
f4caab4 fix: pull request template
780acc2 Merge pull request #21 from thomas-more-devops/docs/readme
86ada6e Change LICENSE to LICENSE.md and update license link
e7aff2e Merge pull request #20 from thomas-more-devops/prep/pr-template
6b5b9d7 docs: add pull request template
2315324 Added CONTRIBUTING.md in docs
78823e5 Added ARCHITECTURE.md in docs
a2f1691 Add MIT License to the project
fc88d81 Delete styles/LICENSE.md
d8b1a03 Docs D: Add MIT License file to styles directory
777b5dd Merge pull request #19 from thomas-more-devops/code/js-comments-errors
2f1d058 fix: add comments and error handling to app.js
f0c921e Merge pull request #18 from thomas-more-devops/code/css-comments
aa19918 Add comments for clarity in main.css
ce130ac Merge pull request #17 from thomas-more-devops/docs/readme
44c1f68 Add comments to HTML structure for clarity
183ff4d Update README with correct information
edea5c9 Merge pull request #8 from thomas-more-devops/fix/setup-paths
727c5ee docs: fix folder name and upstream line in SETUP.md
a528a6c Remove contributing guidelines section from setup
21071c9 Merge pull request #6 from thomas-more-devops/fix/features-links
a0c8bf2 docs: remove CONTRIBUTING.md link from FEATURES.md
5c89208 Merge pull request #7 from thomas-more-devops/docs/setup
eadc82b docs: drop link to ARCHITECTURE.md from FEATURES.md
ffbbdbd Add TaskFlow setup guide
2835525 Merge pull request #5 from thomas-more-devops/docs/features
dd6bf45 docs: add FEATURES.md
963925f Add files
```

## git reflog
```
01e5562 HEAD@{0}: checkout: moving from hotfix/urgent-bug to practice/aza
23e4927 HEAD@{1}: commit: fix: urgent hotfix
8067e50 HEAD@{2}: checkout: moving from practice/aza to hotfix/urgent-bug
01e5562 HEAD@{3}: reset: moving to HEAD
01e5562 HEAD@{4}: checkout: moving from hotfix/urgent-bug to practice/aza
8067e50 HEAD@{5}: checkout: moving from main to hotfix/urgent-bug
8067e50 HEAD@{6}: checkout: moving from practice/aza to main
01e5562 HEAD@{7}: reset: moving to HEAD
01e5562 HEAD@{8}: cherry-pick: practice: commit to cherry-pick
e069115 HEAD@{9}: checkout: moving from practice/aza-extra to practice/aza
703255d HEAD@{10}: commit: practice: commit to cherry-pick
e069115 HEAD@{11}: checkout: moving from practice/aza to practice/aza-extra
e069115 HEAD@{12}: rebase (finish): returning to refs/heads/practice/aza
e069115 HEAD@{13}: rebase (pick): practice: add line 4
a9f012b HEAD@{14}: rebase (reword): practice: add line 3 (reworded)
781a866 HEAD@{15}: rebase (reword): practice: add line 3
7ab6c5c HEAD@{16}: rebase (squash): practice: add line 1
4dc0311 HEAD@{17}: rebase (start): checkout HEAD~4
2c89f3f HEAD@{18}: commit: practice: add line 4
5e15b41 HEAD@{19}: commit: practice: add line 3
106a6ad HEAD@{20}: commit: practice: add line 2
4dc0311 HEAD@{21}: commit: practice: add line 1
8067e50 HEAD@{22}: checkout: moving from main to practice/aza
8067e50 HEAD@{23}: clone: from https://github.com/thomas-more-devops/taskflow-4-IADI3.git
```

## git stash list
```
stash@{0}: On practice/aza: WIP: working on search feature
```
