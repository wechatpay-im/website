# 修改及查询商品券信息 {#mix}

## 修改商品券 {#patch}

品牌方可以通过该接口修改商品券信息。注：修改只会对新发的券生效，历史已经发放给用户的券不会改变。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| brand_id {data-required data-indent=1} | string | 品牌ID
| out_request_no {data-required data-indent=1} | string | 修改请求单号
| display_info {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 展示信息
| name {data-required data-indent=2} | string | 商品券名称
| image_url {data-required data-indent=2} | string | 商品券图片
| background_url {data-required data-indent=2} | string | 商品券背景图
| detail_image_url_list {data-indent=2} | string[] | 商品券详情图列表
| original_price {data-indent=2} | integer | 商品原价
| combo_package_list {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 套餐组合
| name {data-required data-indent=3} | string | 套餐名
| pick_count {data-required data-indent=3} | integer | 可选单品数量
| choice_list {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| name {data-required data-indent=4} | string | 单品名称
| price {data-required data-indent=4} | integer | 单品价格
| count {data-required data-indent=4} | integer | 单品数量
| image_url {data-indent=4} | string | 单品图片
| mini_program_appid {data-indent=4} | string | 单品跳转小程序AppID
| mini_program_path {data-indent=4} | string | 单品跳转小程序路径

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->patchAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}')->patchAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}']->patchAsync([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->patch([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}')->patch([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}']->patch([
  'product_coupon_id' => '1000000013',
  'json' => [
    'brand_id'       => '120344',
    'out_request_no' => '34657_20250101_123456',
    'display_info'   => [
      'name'                  => '全场满100立打8折',
      'image_url'             => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'background_url'        => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
      'detail_image_url_list' => ['https://wxpaylogo.qpic.cn/wxpayl'],
      'original_price'        => 10000,
      'combo_package_list'    => [[
        'name'        => '咖啡2选1',
        'pick_count'  => 3,
        'choice_list' => [[
          'name'               => '美式',
          'price'              => 10000,
          'count'              => 2,
          'image_url'          => 'https://wxpaylogo.qpic.cn/wxpaylogo/xxxxx/xxx',
          'mini_program_appid' => 'wx4fd12345678',
          'mini_program_path'  => '/pages/index/index',
        ],],
      ],],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| state {data-required} | string | 商品券状态<br/>`AUDITING` \| `EFFECTIVE` \| `DEACTIVATED` 枚举值之一
| brand_id {data-required} | string | 品牌ID
| scope {data-required} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required} | string | 使用模式<br/>`SINGLE` \| `SEQUENTIAL` 枚举值之一
| single_usage_info | object {data-tooltip="对应PHP的array"} | 单券模式信息
| normal_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| discount_amount {data-required data-indent=2} | integer | 固定减免金额
| discount_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| percent_off {data-required data-indent=2} | integer | 固定减免百分比
| sequential_usage_info | object {data-tooltip="对应PHP的array"} | 多次优惠模式信息
| type {data-required data-indent=1} | string | 多次优惠规则类型<br/>`INCREMENTAL` \| `EQUAL` 枚举值之一
| count {data-required data-indent=1} | integer | 可使用次数
| available_days {data-required data-indent=1} | integer | 多次优惠有效天数
| interval_days {data-indent=1} | integer | 多次优惠使用间隔天数
| display_info {data-required} | object {data-tooltip="对应PHP的array"} | 展示信息
| name {data-required data-indent=1} | string | 商品券名称
| image_url {data-required data-indent=1} | string | 商品券图片
| background_url {data-required data-indent=1} | string | 商品券背景图
| detail_image_url_list {data-indent=1} | string[] | 商品券详情图列表
| original_price {data-indent=1} | integer | 商品原价
| combo_package_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 套餐组合
| name {data-required data-indent=2} | string | 套餐名
| pick_count {data-required data-indent=2} | integer | 可选单品数量
| choice_list {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| name {data-required data-indent=3} | string | 单品名称
| price {data-required data-indent=3} | integer | 单品价格
| count {data-required data-indent=3} | integer | 单品数量
| image_url {data-indent=3} | string | 单品图片
| mini_program_appid {data-indent=3} | string | 单品跳转小程序AppID
| mini_program_path {data-indent=3} | string | 单品跳转小程序路径
| out_product_no | string | 外部商品ID
| deactivate_request_no | string | 失效请求单号
| deactivate_time | string | 失效时间
| deactivate_reason | string | 失效原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781296)

## 查询商品券 {#get}

品牌方可以通过该接口查询商品券的详细信息，但不包括商品券的批次信息。

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| brand_id {data-required data-indent=1} | string | 品牌ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}')->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}']->getAsync([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->partner->productCoupon->productCoupons->_product_coupon_id_->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}')->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/partner/product-coupon/product-coupons/{product_coupon_id}']->get([
  'product_coupon_id' => '1000000013',
  'query' => [
    'brand_id' => '120344',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| product_coupon_id {data-required} | string | 商品券ID
| state {data-required} | string | 商品券状态<br/>`AUDITING` \| `EFFECTIVE` \| `DEACTIVATED` 枚举值之一
| brand_id {data-required} | string | 品牌ID
| scope {data-required} | string | 优惠范围<br/>`ALL` \| `SINGLE` 枚举值之一
| type {data-required} | string | 商品券类型<br/>`NORMAL` \| `DISCOUNT` \| `EXCHANGE` 枚举值之一
| usage_mode {data-required} | string | 使用模式<br/>`SINGLE` \| `SEQUENTIAL` 枚举值之一
| single_usage_info | object {data-tooltip="对应PHP的array"} | 单券模式信息
| normal_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 满减券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| discount_amount {data-required data-indent=2} | integer | 固定减免金额
| discount_coupon {data-indent=1} | object {data-tooltip="对应PHP的array"} | 折扣券使用规则
| threshold {data-required data-indent=2} | integer | 门槛金额
| percent_off {data-required data-indent=2} | integer | 固定减免百分比
| sequential_usage_info | object {data-tooltip="对应PHP的array"} | 多次优惠模式信息
| type {data-required data-indent=1} | string | 多次优惠规则类型<br/>`INCREMENTAL` \| `EQUAL` 枚举值之一
| count {data-required data-indent=1} | integer | 可使用次数
| available_days {data-required data-indent=1} | integer | 多次优惠有效天数
| interval_days {data-indent=1} | integer | 多次优惠使用间隔天数
| display_info {data-required} | object {data-tooltip="对应PHP的array"} | 展示信息
| name {data-required data-indent=1} | string | 商品券名称
| image_url {data-required data-indent=1} | string | 商品券图片
| background_url {data-required data-indent=1} | string | 商品券背景图
| detail_image_url_list {data-indent=1} | string[] | 商品券详情图列表
| original_price {data-indent=1} | integer | 商品原价
| combo_package_list {data-indent=1} | object[] {data-tooltip="对应PHP的array"} | 套餐组合
| name {data-required data-indent=2} | string | 套餐名
| pick_count {data-required data-indent=2} | integer | 可选单品数量
| choice_list {data-required data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 单品列表
| name {data-required data-indent=3} | string | 单品名称
| price {data-required data-indent=3} | integer | 单品价格
| count {data-required data-indent=3} | integer | 单品数量
| image_url {data-indent=3} | string | 单品图片
| mini_program_appid {data-indent=3} | string | 单品跳转小程序AppID
| mini_program_path {data-indent=3} | string | 单品跳转小程序路径
| out_product_no | string | 外部商品ID
| deactivate_request_no | string | 失效请求单号
| deactivate_time | string | 失效时间
| deactivate_reason | string | 失效原因

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4015781292)
