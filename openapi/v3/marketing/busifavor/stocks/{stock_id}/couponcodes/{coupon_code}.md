# 查询预存code详情 {#get}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| coupon_code {data-required} | string | 商户上传的code
| query | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| appid {data-indent=1} | string | 公众账号ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->_coupon_code_->getAsync([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}')->getAsync([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}']->getAsync([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->_coupon_code_->get([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}')->get([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}']->get([
  'stock_id' => '1212',
  'coupon_code' => '1212',
  'query' => [
    'appid' => 'wx233544546545989',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| code_information {data-required} | object {data-tooltip="对应PHP的array"} | 券code信息
| code {data-indent=1} | string | 商户上传code
| code_status {data-indent=1} | string | 商户上传code分配状态
| upload_time {data-indent=1} | string | 上传时间
| dispatched_time {data-indent=1} | string | 被分配时间
| openid {data-indent=1} | string | 领券用户的OpenID
| unionid {data-indent=1} | string | 领券用户的UnionID
| coupon_code {data-indent=1} | string | 用户券code
| coupon_information {data-required} | object {data-tooltip="对应PHP的array"} | 券码信息
| stock_name {data-required data-indent=1} | string | 商家券批次名称
| belong_merchant {data-required data-indent=1} | string | 批次归属商户号
| comment {data-indent=1} | string | 批次备注
| goods_name {data-required data-indent=1} | string | 适用商品范围
| stock_type {data-required data-indent=1} | string | 批次类型
| transferable {data-indent=1} | boolean | 是否允许转赠
| shareable {data-indent=1} | boolean | 是否允许分享领券链接
| coupon_state {data-indent=1} | string | 券状态
| coupon_use_rule {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 核销规则
| coupon_available_time {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 券可核销时间
| available_begin_time {data-required data-indent=3} | string | 开始时间
| available_end_time {data-required data-indent=3} | string | 结束时间
| available_day_after_receive {data-indent=3} | integer | 生效后N天内有效
| available_week {data-indent=3} | object {data-tooltip="对应PHP的array"} | 固定周期有效时间段
| week_day {data-indent=4} | string[] | 可用星期数
| available_day_time {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 当天可用时间段
| begin_time {data-indent=5} | integer | 当天可用开始时间
| end_time {data-indent=5} | integer | 当天可用结束时间
| irregulary_avaliable_time {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 无规律的有效时间段
| begin_time {data-indent=4} | string | 开始时间
| end_time {data-indent=4} | string | 结束时间
| wait_days_after_receive {data-indent=3} | integer | 领取后N天开始生效
| fixed_normal_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 固定面额满减券使用规则
| discount_amount {data-required data-indent=3} | integer | 优惠金额
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| discount_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| discount_percent {data-required data-indent=3} | integer | 折扣比例
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| exchange_coupon {data-indent=2} | object {data-tooltip="对应PHP的array"} | 换购券使用规则
| exchange_price {data-required data-indent=3} | integer | 单品换购价
| transaction_minimum {data-required data-indent=3} | integer | 消费门槛
| use_method {data-required data-indent=2} | string | 核销方式
| mini_programs_appid {data-indent=2} | string | 小程序appid
| mini_programs_path {data-indent=2} | string | 小程序path
| custom_entrance {data-indent=1} | object {data-tooltip="对应PHP的array"} | 自定义入口
| mini_programs_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 小程序入口
| mini_programs_appid {data-required data-indent=3} | string | 商家小程序appid
| mini_programs_path {data-required data-indent=3} | string | 商家小程序path
| entrance_words {data-required data-indent=3} | string | 入口文案
| guiding_words {data-indent=3} | string | 引导文案
| appid {data-indent=2} | string | 商户公众号appid
| hall_id {data-indent=2} | string | 营销馆id
| store_id {data-indent=2} | string | 可用门店id
| code_display_mode {data-indent=2} | string | code展示模式
| display_pattern_info {data-indent=1} | object {data-tooltip="对应PHP的array"} | 样式信息
| description {data-indent=2} | string | 使用须知
| merchant_logo_url {data-indent=2} | string | 商户logo
| merchant_name {data-indent=2} | string | 商户名称
| background_color {data-indent=2} | string | 背景颜色
| coupon_image_url {data-indent=2} | string | 券详情图片
| finder_info {data-indent=2} | object {data-tooltip="对应PHP的array"} | 视频号相关信息
| finder_id {data-required data-indent=3} | string | 视频号ID
| finder_video_id {data-required data-indent=3} | string | 视频号视频ID
| finder_video_cover_image_url {data-required data-indent=3} | string | 视频号封面图

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)

# 删除预存code {#delete}



| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| coupon_code {data-required} | string | 商户上传的code
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| delete_request_no {data-required data-indent=1} | string | 请求业务单据号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->_coupon_code_->deleteAsync([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}')->deleteAsync([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}']->deleteAsync([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->busifavor->stocks->_stock_id_->couponcodes->_coupon_code_->delete([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}')->delete([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/busifavor/stocks/{stock_id}/couponcodes/{coupon_code}']->delete([
  'stock_id' => '101156451224',
  'coupon_code' => '1212',
  'query' => [
    'delete_request_no' => '1212',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id | string | 批次号
| delete_time | string | 删除时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/docs/merchant/products/merchant-exclusive-coupon/introduction.html)
