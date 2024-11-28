# 申请退款 {#post}

当交易发生之后一段时间内，由于买家或者卖家的原因需要退款时，卖家可以通过退款接口将支付款退还给买家，微信支付将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退到买家账号上。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| appid {data-required data-indent=1} | string | APPID
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sp_appid {data-required data-indent=1} | string | 机构APPID
| sub_appid {data-indent=1} | string | 子商户APPID
| transaction_id {data-indent=1} | string | 微信订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| out_refund_no {data-required data-indent=1} | string | 商户退款单号
| reason {data-indent=1} | string | 退款原因
| notify_url {data-indent=1} | string | 退款通知地址

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->refunds->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/refunds')->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/refunds']->postAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->refunds->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/refunds')->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/refunds']->post([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'json' => [
    'mchid'          => '1900000109',
    'appid'          => 'wx8888888888888888',
    'sp_mchid'       => '1900000100',
    'sub_mchid'      => '1900000109',
    'sp_appid'       => 'wx8888888888888888',
    'sub_appid'      => 'wx8888888888888888',
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'out_refund_no'  => '1217752501201407033233368018',
    'reason'         => '商品已售完',
    'notify_url'     => 'https://www.weixin.qq.com/wxpay/pay.php',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id {data-required} | string | 微信支付退款订单号
| out_refund_no {data-required} | string | 商户退款单号
| create_time {data-required} | string | 退款创建时间
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 退款金额
| refund {data-required data-indent=1} | integer | 退款金额
| currency {data-required data-indent=1} | string | 退款币种
| payer_refund {data-required data-indent=1} | integer | 用户退款金额
| payer_currency {data-required data-indent=1} | string | 支付币种
| exchange_rate {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 汇率
| type {data-indent=2} | string | 汇率类型
| rate {data-indent=2} | integer | 汇率值
| detail | object {data-tooltip="对应PHP的array"} | 优惠退款详情
| promotion_id {data-required data-indent=1} | string | 券ID
| scope {data-indent=1} | string | 优惠范围
| type {data-indent=1} | string | 优惠类型
| amount {data-indent=1} | integer | 优惠券面额
| refund_amount {data-indent=1} | integer | 优惠券退款额
| currency {data-required data-indent=1} | string | 货币类型

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_11.shtml)

# 查询所有退款 {#get}

提交退款申请后，通过调用该接口查询退款状态。退款有一定延时，用零钱支付的退款20分钟内到账，银行卡支付的退款3个工作日后重新查询退款状态。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| base_uri | string | 声明接入点`https://apihk.mch.weixin.qq.com/`(香港接入)
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| transaction_id {data-indent=1} | string | 微信支付订单号
| out_trade_no {data-indent=1} | string | 商户订单号
| mchid {data-required data-indent=1} | string | 商户号
| sub_mchid {data-required data-indent=1} | string | 子商户号
| sp_mchid {data-required data-indent=1} | string | 机构商户号
| offset {data-required data-indent=1} | integer | 记录起始位置
| count {data-required data-indent=1} | integer | 每页笔数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->global->refunds->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/global/refunds')->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/global/refunds']->getAsync([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->global->refunds->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/global/refunds')->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/global/refunds']->get([
  'base_uri' => 'https://apihk.mch.weixin.qq.com/', // 接入点(香港接入)
  'query' => [
    'transaction_id' => '1217752501201407033233368018',
    'out_trade_no'   => '',
    'mchid'          => '1900000109',
    'sub_mchid'      => '1900000109',
    'sp_mchid'       => '1900000100',
    'offset'         => 0,
    'count'          => 10,
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| id {data-required} | string | 微信支付交易订单号
| mchid {data-required} | string | 商户号
| sub_mchid {data-required} | string | 子商户号
| sp_mchid {data-required} | string | 机构商户号
| out_trade_no {data-required} | string | 商户原交易订单号
| amount {data-required} | object {data-tooltip="对应PHP的array"} | 订单金额
| total {data-required data-indent=1} | integer | 订单金额
| currency {data-indent=1} | string | 货币类型
| payer_total {data-required data-indent=1} | integer | 用户支付金额
| payer_currency {data-required data-indent=1} | string | 支付币种
| data {data-required} | object[] {data-tooltip="对应PHP的array"} | 退款单列表
| id {data-required data-indent=1} | string | 微信退款单号
| out_refund_no {data-required data-indent=1} | string | 商户退款单号
| channel {data-indent=1} | string | 退款渠道
| recv_account {data-indent=1} | string | 退款入账账户
| fund_source {data-indent=1} | string | 退款资金来源
| success_time {data-indent=1} | string | 退款成功时间
| create_time {data-required data-indent=1} | string | 退款创建时间
| status {data-required data-indent=1} | string | 退款状态
| amount {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 退款金额
| refund {data-required data-indent=2} | integer | 退款金额
| currency {data-indent=2} | string | 货币类型
| payer_refund {data-required data-indent=2} | integer | 用户退款金额
| payer_currency {data-required data-indent=2} | string | 支付币种
| exchange_rate {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 汇率
| type {data-indent=3} | string | 汇率类型
| rate {data-indent=3} | integer | 汇率值
| refund_detail {data-indent=1} | object {data-tooltip="对应PHP的array"} | 优惠退款详情
| promotion_id {data-required data-indent=2} | string | 券ID
| scope {data-indent=2} | string | 优惠范围
| type {data-indent=2} | string | 优惠类型
| amount {data-indent=2} | integer | 优惠券面额
| refund_amount {data-indent=2} | integer | 优惠券退款额
| currency {data-required data-indent=2} | string | 货币类型
| total_num {data-required} | integer | 订单总退款次数
| current_total_num {data-required} | integer | 本次返回退款单数

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api_external/ch/apis/chapter5_1_13.shtml)
