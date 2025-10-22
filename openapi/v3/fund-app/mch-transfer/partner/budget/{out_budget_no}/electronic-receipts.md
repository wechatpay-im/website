# 申请及查询预算出资的电子回单 {#mix}

## 申请预算出资的电子回单 {#post}

申请预算出资的电子回单。指定了收款商户号，表示获取按日及按收款方汇总的电子回单，否则表示获取仅按日汇总的电子回单。前置条件：只支持查询T-1的最近180天内的汇总电子回单。 注：单个服务商商户的接口频率限制为20次/s

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| start_date {data-required data-indent=1} | string | 开始日期
| end_date {data-required data-indent=1} | string | 结束日期
| sponsor_mchid {data-required data-indent=1} | string | 出资商户号
| receiver_mchid {data-indent=1} | string | 收款商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->budget->_out_budget_no_->electronicReceipts->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts')->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts']->postAsync([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->budget->_out_budget_no_->electronicReceipts->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts')->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts']->post([
  'out_budget_no' => 'budget202506300102',
  'json' => [
    'start_date'     => '2025-09-01',
    'end_date'       => '2025-09-30',
    'sponsor_mchid'  => '1900001109',
    'receiver_mchid' => '1900102209',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| start_date {data-required} | string | 开始日期
| end_date {data-required} | string | 结束日期
| sponsor_mchid {data-required} | string | 出资商户号
| receiver_mchid | string | 收款商户号
| receipt_state {data-required} | string | 电子回单状态<br/>`ACCEPTED` \| `FINISHED` 枚举值之一
| accept_id {data-required} | string | 受理凭证
| hash_type | string | 电子回单文件的hash方法<br/>`SHA256` \| `SM3` 枚举值之一
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016209966)

## 查询预算出资的电子回单 {#get}

查询预算出资的电子回单。 注：单个服务商商户的接口频率限制为50次/s

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| accept_id {data-required data-indent=1} | string | 受理凭证

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->fundApp->mchTransfer->partner->budget->_out_budget_no_->electronicReceipts->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts')->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts']->getAsync([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->fundApp->mchTransfer->partner->budget->_out_budget_no_->electronicReceipts->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts')->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/fund-app/mch-transfer/partner/budget/{out_budget_no}/electronic-receipts']->get([
  'out_budget_no' => 'budget202506300102',
  'query' => [
    'accept_id' => 'c2RmYWtqampqampsZmFza2xmanNhbGZqc2FrZmpzbGZqc2tsZmp',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_budget_no {data-required} | string | 商户预算单号
| start_date {data-required} | string | 开始日期
| end_date {data-required} | string | 结束日期
| sponsor_mchid {data-required} | string | 出资商户号
| receiver_mchid | string | 收款商户号
| receipt_state {data-required} | string | 电子回单状态<br/>`ACCEPTED` \| `FINISHED` 枚举值之一
| accept_id {data-required} | string | 受理凭证
| hash_type | string | 电子回单文件的hash方法<br/>`SHA256` \| `SM3` 枚举值之一
| hash_value | string | 电子回单文件的hash值
| download_url | string | 电子回单下载地址

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4016209977)
