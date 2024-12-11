# 提交、修改及查询报关信息(可用版本) {#mix}

## 报关 {#post}

该接口用于商户提交海关需要的订单附加信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://apihk.mch.weixin.qq.com/global/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 机构APPID
| mchid {data-required data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| customs {data-required data-indent=1} | string | 海关
| merchant_customs_no {data-required data-indent=1} | string | 商户海关备案号
| duty {data-indent=1} | integer | 关税
| sub_order_no {data-indent=1} | string | 商户子订单号
| fee_type {data-indent=1} | string | 货币类型
| order_fee {data-indent=1} | integer | 子订单金额
| transport_fee {data-indent=1} | integer | 物流费用
| product_fee {data-indent=1} | integer | 商品费用

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->customs->orders->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/customs/orders')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/customs/orders']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->customs->orders->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/customs/orders')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/customs/orders']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'sub_order_no'        => '20150806125346',
    'fee_type'            => 'CNY',
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 机构APPID
| mchid {data-required} | string | 商户号
| state {data-required} | string | 报关状态
| out_trade_no {data-required} | string | 商户订单号
| transaction_id {data-required} | string | 微信订单号
| sub_order_no | string | 商户子订单号
| sub_order_id | string | 微信子订单号
| verify_department {data-required} | string | 核验机构
| verify_department_trade_id {data-required} | string | 核验机构交易流水号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/declarecustom_ch/chapter3_1.shtml)

## 报关查询 {#get}

商户通过订单号查询提交的订单附加信息及订单报关状态。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://apihk.mch.weixin.qq.com/global/`(香港接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-required data-indent=1} | string | 机构APPID
| mchid {data-required data-indent=1} | string | 商户号
| order_type {data-required data-indent=1} | string | 订单类型<br/>`out_trade_no` \| `transaction_id` \| `sub_order_no` \| `sub_order_id` 枚举值之一
| order_no {data-required data-indent=1} | string | 订单号
| customs {data-required data-indent=1} | string | 海关
| offset {data-indent=1} | integer | 偏移量
| limit {data-indent=1} | integer | 请求最大记录条数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->customs->orders->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/customs/orders')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/customs/orders']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->customs->orders->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/customs/orders')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/customs/orders']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'query' => [
    'appid'      => 'wxd678efh567hg6787',
    'mchid'      => '1230000109',
    'order_type' => 'out_trade_no',
    'order_no'   => '20150806125346',
    'customs'    => 'SHANGHAI_ZS',
    'offset'     => 1,
    'limit'      => 20,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 机构APPID
| mchid {data-required} | string | 商户号
| transaction_id {data-required} | string | 微信订单号
| verify_department {data-required} | string | 核验机构
| verify_department_trade_id {data-required} | string | 核验机构流水号
| offset {data-required} | integer | 偏移量
| limit {data-required} | integer | 请求最大记录条数
| total_count {data-required} | integer | 查询结果总条数
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 报关数据包
| sub_order_no {data-indent=1} | string | 商户子单号
| sub_order_id {data-indent=1} | string | 微信子单号
| mch_customs_no {data-indent=1} | string | 商户海关备案号
| customs {data-required data-indent=1} | string | 海关代码
| fee_type {data-indent=1} | string | 币种
| order_fee {data-indent=1} | integer | 子单金额
| duty {data-indent=1} | integer | 关税
| transport_fee {data-indent=1} | integer | 物流费用
| product_fee {data-indent=1} | integer | 商品费用
| state {data-required data-indent=1} | string | 报关状态
| explanation {data-indent=1} | string | 报关结果说明
| modify_time {data-required data-indent=1} | string | 最后更新时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/declarecustom_ch/chapter3_3.shtml)

## 报关信息修改 {#patch}

该接口用于商户修改订单附加信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri {data-required} | string | 声明接入点`https://apihk.mch.weixin.qq.com/global/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| appid {data-required data-indent=1} | string | 机构APPID
| mchid {data-required data-indent=1} | string | 商户号
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| transaction_id {data-required data-indent=1} | string | 微信订单号
| sub_order_no {data-indent=1} | string | 商户子订单号
| customs {data-required data-indent=1} | string | 海关编码
| merchant_customs_no {data-required data-indent=1} | string | 商户海关备案号
| duty {data-indent=1} | integer | 关税
| order_fee {data-indent=1} | integer | 子订单金额
| transport_fee {data-indent=1} | integer | 物流费用
| product_fee {data-indent=1} | integer | 商品费用

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->customs->orders->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/customs/orders')->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/customs/orders']->patchAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->customs->orders->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/customs/orders')->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/customs/orders']->patch([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/global/', // 接入点(香港接入)
  'json' => [
    'appid'               => 'wxd678efh567hg6787',
    'mchid'               => '1230000109',
    'out_trade_no'        => '20150806125346',
    'transaction_id'      => '1000320306201511078440737890',
    'sub_order_no'        => '20150806125346',
    'customs'             => 'SHANGHAI_ZS',
    'merchant_customs_no' => '123456',
    'duty'                => 888,
    'order_fee'           => 888,
    'transport_fee'       => 888,
    'product_fee'         => 888,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 机构APPID
| mchid {data-required} | string | 商户号
| state {data-required} | string | 报关状态
| out_trade_no {data-required} | string | 商户订单号
| transaction_id {data-required} | string | 微信订单号
| sub_order_no | string | 商户子订单号
| sub_order_id | string | 微信子订单号
| modify_time {data-required} | string | 最后更新时间
| verify_department {data-required} | string | 核验机构
| verify_department_trade_id {data-required} | string | 核验机构流水号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/declarecustom_ch/chapter3_5.shtml)
