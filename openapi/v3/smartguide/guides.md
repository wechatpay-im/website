# 服务人员注册 {#post}

用于服务商/商户开发者为商户注册服务人员使用。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户ID
| corpid {data-indent=1} | string | 企业ID
| store_id {data-indent=1} | integer | 门店ID
| userid {data-indent=1} | string | 企业微信的员工ID
| name {data-indent=1} | string | 企业微信的员工姓名
| mobile {data-indent=1} | string | 手机号码
| qr_code {data-indent=1} | string | 员工个人二维码
| avatar {data-indent=1} | string | 头像URL
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->smartguide->guides->postAsync([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/smartguide/guides')->postAsync([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/smartguide/guides']->postAsync([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->smartguide->guides->post([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/smartguide/guides')->post([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/smartguide/guides']->post([
  'json' => [
    'sub_mchid' => '',
    'corpid' => '',
    'store_id' => 0,
    'userid' => '',
    'name' => '',
    'mobile' => '',
    'qr_code' => '',
    'avatar' => '',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| guide_id | string | 服务人员ID

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_1.shtml)

# 服务人员查询 {#get}

用于服务商/商户开发者查询已注册的服务人员ID等信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query | object | 声明请求的查询参数
| sub_mchid {data-indent=1} | string | 子商户ID
| store_id {data-indent=1} | integer | 门店ID
| userid {data-indent=1} | string | 企业微信的员工ID
| mobile {data-indent=1} | string | 手机号码
| work_id {data-indent=1} | string | 工号
| limit {data-indent=1} | integer | 最大资源条数
| offset {data-indent=1} | integer | 请求资源起始位置
| headers | object | 声明请求的头参数
| Wechatpay-Serial {data-indent=1} | string | 平台公钥ID/平台公钥证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->smartguide->guides->getAsync([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/smartguide/guides')->getAsync([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/smartguide/guides']->getAsync([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->smartguide->guides->get([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/smartguide/guides')->get([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/smartguide/guides']->get([
  'query' => [
    'sub_mchid' => '',
    'store_id' => 0,
    'userid' => '',
    'mobile' => '',
    'work_id' => '',
    'limit' => 0,
    'offset' => 0,
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| total_count | integer | 服务人员数量
| limit | integer | 最大资源条数
| offset | integer | 请求资源起始位置
| data | object[] | 
| guide_id {data-indent=1} | string | 服务人员ID
| store_id {data-indent=1} | integer | 门店ID
| name {data-indent=1} | string | 企业微信的员工姓名
| mobile {data-indent=1} | string | 手机号码
| userid {data-indent=1} | string | 企业微信的员工ID
| work_id {data-indent=1} | string | 工号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/smartguide/chapter3_3.shtml)
