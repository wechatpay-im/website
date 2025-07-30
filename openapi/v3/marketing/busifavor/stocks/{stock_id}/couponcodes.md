# 上传及查询预存code信息 {#mix}

## 上传预存code  {#post}

商家券的Code码可由微信后台随机分配，同时支持商户自定义。如商家已有自己的优惠券系统，可直接使用自定义模式。即商家预先向微信支付上传券Code，当券在发放时，微信支付自动从已导入的Code中随机取值（不能指定），派发给用户。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| coupon_code_list {data-indent=1} | string[] | 券code列表
| upload_request_no {data-required data-indent=1} | string | 请求业务单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->postAsync([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes')->postAsync([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes']->postAsync([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->post([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes')->post([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes']->post([
  'stock_id' => '98065001',
  'json' => [
    'coupon_code_list'  => ['ABC9588200'],
    'upload_request_no' => '100002322019090134234sfdf',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| total_count {data-required} | integer | 去重后上传code总数
| success_count {data-required} | integer | 上传成功code个数
| success_codes | string[] | 上传成功的code列表
| success_time {data-required} | string | 上传成功时间
| fail_count | integer | 上传失败code个数
| fail_codes | object[] {data-tooltip="对应PHP的array"} | 上传失败的code及原因
| coupon_code {data-required data-indent=1} | string | 上传失败的券code
| code {data-required data-indent=1} | string | 上传失败错误码
| message {data-required data-indent=1} | string | 上传失败错误信息
| exist_codes | string[] | 已存在的code列表
| duplicate_codes | string[] | 本次请求中重复的code列表

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012487038) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4012492853) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4015715946) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4015717418)

## 查询预存code列表 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| status {data-indent=1} | string | 券code状态<br/>`SENDED` \| `USED` \| `EXPIRED` \| `DELETED` \| `DEACTIVATED` 枚举值之一
| appid {data-indent=1} | string | 公众账号ID
| offset {data-indent=1} | number | 分页页码
| limit {data-indent=1} | number | 分页大小

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->getAsync([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes')->getAsync([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes']->getAsync([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->get([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes')->get([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes']->get([
  'stock_id' => '98065001',
  'query' => [
    'status' => 'SENDED',
    'appid'  => 'wx233544546545989',
    'offset' => 0,
    'limit'  => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| total_count {data-required} | integer | 批次总数
| limit {data-required} | integer | 分页大小
| offset {data-required} | integer | 分页页码
| data | object[] {data-tooltip="对应PHP的array"} | 券code信息
| code {data-indent=1} | string | 商户上传code
| code_status {data-indent=1} | string | 商户上传code分配状态
| upload_time {data-indent=1} | string | 上传时间
| dispatched_time {data-indent=1} | string | 被分配时间
| openid {data-indent=1} | string | 领券用户的OpenID
| unionid {data-indent=1} | string | 领券用户的UnionID
| coupon_code {data-indent=1} | string | 用户券code

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)
