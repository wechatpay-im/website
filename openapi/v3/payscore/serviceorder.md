# 普通商户创建及查询微信支付分订单信息 {#mix}

## 创建支付分订单 {#post}

用户申请使用服务时，商户可通过此接口申请创建微信支付分订单。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_order_no {data-required data-indent=1} | string | 商户服务订单号
| appid {data-required data-indent=1} | string | 公众账号ID
| service_id {data-required data-indent=1} | string | 服务ID
| service_introduction {data-required data-indent=1} | string | 服务信息
| post_payments {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-required data-indent=2} | string | 付费名称
| amount {data-indent=2} | number | 付费金额
| description {data-indent=2} | string | 付费说明
| count {data-indent=2} | number | 付费数量
| post_discounts {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-required data-indent=2} | string | 优惠名称
| description {data-required data-indent=2} | string | 优惠说明
| count {data-indent=2} | number | 优惠数量
| time_range {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-required data-indent=2} | string | 服务开始时间
| end_time {data-indent=2} | string | 服务结束时间
| start_time_remark {data-indent=2} | string | 服务开始时间备注
| end_time_remark {data-indent=2} | string | 服务结束时间备注
| location {data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=2} | string | 服务开始地点
| end_location {data-indent=2} | string | 服务结束地点
| risk_fund {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=2} | string | 风险名称
| amount {data-required data-indent=2} | number | 风险金额
| description {data-indent=2} | string | 风险说明
| attach {data-indent=1} | string | 商户数据包
| notify_url {data-required data-indent=1} | string | 商户回调地址
| openid {data-indent=1} | string | 用户标识
| need_user_confirm {data-indent=1} | boolean | 是否需要用户确认
| device {data-indent=1} | object {data-tooltip="对应PHP的array"} | 设备信息
| start_device_id {data-indent=2} | string | 服务开始的设备ID
| end_device_id {data-indent=2} | string | 服务结束的设备ID
| materiel_no {data-indent=2} | string | 物料编码

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->postAsync([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder')->postAsync([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder']->postAsync([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->post([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder')->post([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder']->post([
  'json' => [
    'out_order_no'         => '1234323JKHDFE1243252',
    'appid'                => 'wxd678efh567hg6787',
    'service_id'           => '2002000000000558128851361561536',
    'service_introduction' => '某某酒店',
    'post_payments'        => [[
      'name'        => '就餐费用',
      'amount'      => 40000,
      'description' => '就餐人均100元',
      'count'       => 4,
    ],],
    'post_discounts'       => [[
      'name'        => '满20减1元',
      'description' => '不与其他优惠叠加',
      'count'       => 2,
    ],],
    'time_range'           => [
      'start_time'        => '20091225091010',
      'end_time'          => '20091225121010',
      'start_time_remark' => '备注1',
      'end_time_remark'   => '备注2',
    ],
    'location'             => [
      'start_location' => '嗨客时尚主题展餐厅',
      'end_location'   => '嗨客时尚主题展餐厅',
    ],
    'risk_fund'            => [
      'name'        => 'DEPOSIT',
      'amount'      => 10000,
      'description' => '就餐的预估费用',
    ],
    'attach'               => 'Easdfowealsdkjfnlaksjdlfkwqoi&wl3l2sald',
    'notify_url'           => 'https://api.test.com',
    'openid'               => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'need_user_confirm'    => true,
    'device'               => [
      'start_device_id' => 'HG123456',
      'end_device_id'   => 'HG123456',
      'materiel_no'     => 'example_materiel_no',
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| appid {data-required} | string | 公众账号ID
| mchid {data-required} | string | 商户号
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态<br/>`CREATED` \| `DOING` \| `DONE` \| `REVOKED` \| `EXPIRED` 枚举值之一
| state_description | string | 订单状态说明<br/>`USER_CONFIRM` \| `MCH_COMPLETE` 枚举值之一
| post_payments | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 后付费商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=1} | string | 风险名称<br/>`DEPOSIT` \| `ADVANCE` \| `CASH_DEPOSIT` \| `ESTIMATE_ORDER_COST` 枚举值之一
| amount {data-required data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间段
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 商户数据包
| notify_url | string | 商户回调地址
| order_id {data-required} | string | 微信支付服务订单号
| package {data-required} | string | 跳转微信侧小程序订单数据

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012587900) [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4012647418) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_1.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/create-service-order.html)

## 查询支付分订单 {#get}

用于查询单笔微信支付分订单详细信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| out_order_no {data-indent=1} | string | 商户服务订单号
| query_id {data-indent=1} | string | 回跳查询ID
| service_id {data-required data-indent=1} | string | 服务ID
| appid {data-required data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->payscore->serviceorder->getAsync([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/payscore/serviceorder')->getAsync([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/payscore/serviceorder']->getAsync([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->payscore->serviceorder->get([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/payscore/serviceorder')->get([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/payscore/serviceorder']->get([
  'query' => [
    'out_order_no' => '1234323JKHDFE1243252',
    'query_id'     => '',
    'service_id'   => '2002000000000558128851361561536',
    'appid'        => 'wxd678efh567hg6787',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| out_order_no {data-required} | string | 商户服务订单号
| service_id {data-required} | string | 服务ID
| appid {data-required} | string | 服务商公众号ID
| mchid {data-required} | string | 服务商商户号
| service_introduction {data-required} | string | 服务信息
| state {data-required} | string | 服务订单状态<br/>`CREATED` \| `DOING` \| `DONE` \| `REVOKED` \| `EXPIRED` 枚举值之一
| state_description | string | 订单状态说明<br/>`USER_CONFIRM` \| `MCH_COMPLETE` 枚举值之一
| post_payments | object[] {data-tooltip="对应PHP的array"} | 后付费项目
| name {data-indent=1} | string | 付费名称
| amount {data-indent=1} | number | 付费金额
| description {data-indent=1} | string | 付费说明
| count {data-indent=1} | number | 付费数量
| post_discounts | object[] {data-tooltip="对应PHP的array"} | 商户优惠
| name {data-indent=1} | string | 优惠名称
| description {data-indent=1} | string | 优惠说明
| amount {data-indent=1} | number | 优惠金额
| count {data-indent=1} | number | 优惠数量
| risk_fund | object {data-tooltip="对应PHP的array"} | 服务风险金
| name {data-required data-indent=1} | string | 风险名称<br/>`DEPOSIT` \| `ADVANCE` \| `CASH_DEPOSIT` \| `ESTIMATE_ORDER_COST` 枚举值之一
| amount {data-required data-indent=1} | number | 风险金额
| description {data-indent=1} | string | 风险说明
| total_amount | number | 总金额
| need_collection | boolean | 是否需要收款
| collection | object {data-tooltip="对应PHP的array"} | 收款信息
| state {data-required data-indent=1} | string | 收款状态<br/>`USER_PAYING` \| `USER_PAID` 枚举值之一
| total_amount {data-indent=1} | number | 总收款金额
| paying_amount {data-indent=1} | number | 待收金额
| paid_amount {data-indent=1} | number | 已收金额
| details {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 收款明细列表
| seq {data-indent=2} | number | 收款序号
| amount {data-indent=2} | number | 单笔收款金额
| paid_type {data-indent=2} | string | 收款成功渠道<br/>`NEWTON` \| `MCH` 枚举值之一
| paid_time {data-indent=2} | string | 收款成功时间
| transaction_id {data-indent=2} | string | 微信支付交易单号
| promotion_detail {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 优惠功能
| coupon_id {data-required data-indent=3} | string | 券ID
| name {data-indent=3} | string | 优惠名称
| scope {data-indent=3} | string | 优惠范围<br/>`SINGLE` \| `GLOBAL` 枚举值之一
| type {data-indent=3} | string | 优惠类型<br/>`CASH` \| `NOCASH` 枚举值之一
| amount {data-required data-indent=3} | number | 优惠券面额
| stock_id {data-indent=3} | string | 活动ID
| wechatpay_contribute {data-indent=3} | number | 微信出资
| merchant_contribute {data-indent=3} | number | 商户出资
| other_contribute {data-indent=3} | number | 其他出资
| currency {data-indent=3} | string | 优惠币种
| goods_detail {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| goods_id {data-required data-indent=4} | string | 商品编码
| quantity {data-indent=4} | number | 商品数量
| unit_price {data-indent=4} | number | 商品价格
| discount_amount {data-indent=4} | number | 商品优惠金额
| goods_remark {data-indent=4} | string | 商品备注
| bank_type {data-indent=1} | string | 收款银行
| time_range | object {data-tooltip="对应PHP的array"} | 服务时间
| start_time {data-indent=1} | string | 服务开始时间
| end_time {data-indent=1} | string | 服务结束时间
| start_time_remark {data-indent=1} | string | 服务开始时间备注
| end_time_remark {data-indent=1} | string | 服务结束时间备注
| location | object {data-tooltip="对应PHP的array"} | 服务位置
| start_location {data-indent=1} | string | 服务开始地点
| end_location {data-indent=1} | string | 服务结束地点
| attach | string | 附加数据
| notify_url {data-required} | string | 商户回调地址
| openid | string | 服务商公众号下的用户标识
| order_id | string | 微信支付服务订单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/payscore/chapter3_2.shtml) [官方文档](https://pay.weixin.qq.com/docs/merchant/apis/weixin-pay-score/service-order/get-service-order.html)
