# 添加分账接收方 {#post}

商户发起添加分账接收方请求，建立分账接收方列表。后续可通过发起分账请求，将分账方商户结算后的资金，分给该分账接收方。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方帐号
| name {data-indent=1} | string | 分账个人接收方姓名
| authorized {data-indent=1} | boolean | 是否已经获取用户实名信息授权
| relation_type {data-indent=1} | string | 与分账方的关系类型
| custom_relation {data-indent=1} | string | 自定义的分账关系
| scene {data-indent=1} | string | 分账场景详细描述
| major_service {data-indent=1} | string | 接收方商户的主营业务范围
| expected_ratio {data-indent=1} | integer | 分账接收方预计分账比例
| application_file_id {data-indent=1} | string | 增加分账接收方申请函文件ID
| partnership_file_id {data-indent=1} | string | 分账方与接收方合作关系证明文件ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->receivers->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/receivers')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/receivers']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->receivers->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/receivers')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/receivers']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
    'name' => 'hu89ohu89ohu89o',
    'authorized' => true,
    'relation_type' => 'SERVICE_PROVIDER',
    'custom_relation' => '代理商',
    'scene' => '该分账接收方是境内税费服务提供方，帮助商户向境内海关代扣代缴税费。',
    'major_service' => '税务准备服务',
    'expected_ratio' => 2000,
    'application_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
    'partnership_file_id' => 'de851a06-5a38-9d31-a102-275a17c477de',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_mchid | string | 子商户号
| type | string | 分账接收方类型
| account | string | 分账接收方账号
| name | string | 分账接收方全称
| relation_type | string | 与分账方的关系类型
| custom_relation | string | 自定义的分账关系
| scene | string | 分账场景详细描述
| major_service | string | 接收方商户的主营业务范围
| expected_ratio | integer | 分账接收方预计分账比例
| file_id | string | 微信文件标识ID
| state | string | 接收方关系状态
| fail_reason | string | 接收关系添加失败原因
| application_file_id | string | 增加分账接收方申请函文件ID
| partnership_file_id | string | 分账方与接收方合作关系证明文件ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_6.shtml)

# 删除分账接收方 {#delete}

商户发起删除分账接收方请求。删除后，不支持将分账方商户结算后的资金再分给该分账接收方。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| appid {data-indent=1} | string | 应用ID
| sub_appid {data-indent=1} | string | 子商户应用ID
| type {data-indent=1} | string | 分账接收方类型
| account {data-indent=1} | string | 分账接收方帐号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->profitSharing->receivers->deleteAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/profit-sharing/receivers')->deleteAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/global/profit-sharing/receivers']->deleteAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->profitSharing->receivers->delete([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/global/profit-sharing/receivers')->delete([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/global/profit-sharing/receivers']->delete([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'sub_mchid' => '1900000109',
    'appid' => 'wx8888888888888888',
    'sub_appid' => 'wx8888888888888889',
    'type' => 'MERCHANT_ID',
    'account' => '86693852',
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter4_1_8.shtml)
