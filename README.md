# semantic-release-sample-plugin-demo

semantic-releaseのプラグインの挙動確認用のデモです. semantic-releaseの全プラグインを簡単な処理(```./plugin/index.js```)に置き換えています. ただし, Dry実行なためprepare以降のステップは実行されません.

[全プラグイン(各ステップ)について](link-https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/plugins.md#verifyconditions-plugin)

## 確認(ローカル環境)
```
    $ yarn semantic-release
```