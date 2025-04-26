# 导入定向用户协议号 {#post}

创建快捷交易协议号上传任务，每个上传任务中需要上传一个快捷交易协议号文件。微信收到快捷交易协议号文件后，会识别出其中的微信用户，保存到指定的号码包中。一个号码包可以包含多个上传任务，这些上传任务导入的用户会被合并去重，再追加写到号码包。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| package_id {data-required} | string | 号码包id
| body {data-required} | object | `multipart/form-data` 数据结构
| file {data-required data-indent=1} | object | 快捷交易协议号文件
| meta {data-required data-indent=1} | string | 媒体文件元信息，使用json表示
| {colspan=3 .im-table-line}
| bank_type {data-required data-indent=2} | string | 银行类型
| filename {data-required data-indent=2} | string | 文件名
| sha256 {data-required data-indent=2} | string | 文件的`sha256`摘要

{.im-table #request}

::: code-group

```php [异步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$instance->v3->marketing->bank->packages->_package_id_->tasks->postAsync([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$instance->chain('v3/marketing/bank/packages/{package_id}/tasks')->postAsync([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$instance['v3/marketing/bank/packages/{package_id}/tasks']->postAsync([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$response = $instance->v3->marketing->bank->packages->_package_id_->tasks->post([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$response = $instance->chain('v3/marketing/bank/packages/{package_id}/tasks')->post([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$media = new \WeChatPay\Util\MediaUtil('file:///path/to/active_user.csv');
$meta = \json_decode($media->getMeta());
$meta->bank_type = 'your_bank_id';
$media->setMeta(\json_encode($meta));

$response = $instance['v3/marketing/bank/packages/{package_id}/tasks']->post([
  'package_id' => '8473295',
  'body' => $media->getStream(),
  'headers' => [
    'Content-Type' => $media->getContentType(),
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| task_id {data-required} | string | 上传任务
| package_id {data-required} | string | 号码包id
| filename {data-required} | string | 文件名
| bank_type {data-required} | string | 银行类型
| create_time  {data-required}| string | 创建上传任务的时间
| update_time | string | 上传任务最近一次更新的时间
| status | string | 任务状态<br/>`PROCESSING` \| `FINISHED` 枚举值之一
| fail_count | integer | 失败数
| success_count | integer | 成功数
| success_user_count | integer | 匹配成功的微信用户数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter9_8_1.shtml)

# 查询上传任务列表 {#get}

查询号码包中符合条件的上传任务

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| package_id {data-required} | string | 号码包id
| query {data-required} | object | 声明请求的查询参数
| status {data-required data-indent=1} | string | 任务状态<br/>`PROCESSING` \| `FINISHED` 枚举值之一
| filename {data-indent=1} | string | 文件名
| offset {data-indent=1} | integer | 分页页码
| limit {data-indent=1} | integer | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->bank->packages->_package_id_->tasks->getAsync([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/bank/packages/{package_id}/tasks')->getAsync([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/bank/packages/{package_id}/tasks']->getAsync([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->bank->packages->_package_id_->tasks->get([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/bank/packages/{package_id}/tasks')->get([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/bank/packages/{package_id}/tasks']->get([
  'package_id' => '8473295',
  'query' => [
    'status' => 'PROCESSING',
    'filename' => 'active_user.csv',
    'offset' => 0,
    'limit' => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count {data-required} | integer | 总数量
| offset {data-required} | integer | 分页页码
| limit {data-required} | integer | 分页大小
| data | object[] | 上传任务列表
| task_id {data-required data-indent=1} | string | 上传任务
| package_id {data-required data-indent=1} | string | 号码包id
| filename {data-required data-indent=1} | string | 文件名
| bank_type {data-required data-indent=1} | string | 银行类型
| create_time {data-required data-indent=1} | string | 创建上传任务的时间
| update_time {data-indent=1} | string | 上传任务最近一次更新的时间
| status {data-indent=1} | string | 任务状态<br/>`PROCESSING` \| `FINISHED` 枚举值之一
| success_count {data-indent=1} | integer | 成功数
| fail_count {data-indent=1} | integer | 失败数
| success_user_count {data-indent=1} | integer | 匹配成功的微信用户数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012466728)
