---
title: 提交停车场进件申请
description: 对商户提供提交停车场进件申请接口
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| parking_lot {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 
| parking_lot_name {data-required data-indent=2} | string | 停车场名称
| out_parking_lot_id {data-required data-indent=2} | string | 商户停车场ID
| parking_lot_address {data-required data-indent=2} | string | 停车场地址
| longitude {data-required data-indent=2} | string | 停车场经度
| latitude {data-required data-indent=2} | string | 停车场纬度
| parking_lot_type {data-required data-indent=2} | string | 停车场类型<br/>`PARKING_LOT_TYPE_UNKNOWN` \| `PARKING_LOT_TYPE_BUSINESS_DISTRICT` \| `PARKING_LOT_TYPE_OFFICE_BUILDING` \| `PARKING_LOT_TYPE_TRANSPORTATION_HUB` \| `PARKING_LOT_TYPE_RESIDENTIAL_AREA` \| `PARKING_LOT_TYPE_PARK_AREA` \| `PARKING_LOT_TYPE_OTHER_PUBLIC_FACILITY` 枚举值之一
| phone_number {data-required data-indent=2} | string | 客服联系电话
| parking_sign_url {data-indent=2} | string | 收费告示牌url
| notification_text_list {data-indent=2} | string[] | 停车场优惠文案
| payment_mini_prog_appid {data-indent=2} | string | 商家支付小程序appid
| payment_path {data-required data-indent=2} | string | 商家支付路径
| parking_order_mini_prog_appid {data-indent=2} | string | 商家停车订单小程序appid
| parking_order_path {data-indent=2} | string | 商家停车订单路径
| charging_rule {data-indent=2} | object {data-tooltip="对应PHP的array"} | 
| rule_type {data-indent=3} | string | 收费规则类型<br/>`CHARGING_RULE_UNKNOWN` \| `CHARGING_RULE_FIXED_INTERVAL` \| `CHARGING_RULE_SEGMENT` \| `CHARGING_RULE_PER_ENTRY` 枚举值之一
| fee_limit_type {data-indent=3} | string | 收费金额限制类型<br/>`FEE_LIMIT_UNKNOWN` \| `FEE_LIMIT_AGGREGATE` \| `FEE_LIMIT_SINGLE` 枚举值之一
| daily_limit_type {data-indent=3} | string | 计费周期类型<br/>`DAILY_LIMIT_UNKNOWN` \| `DAILY_LIMIT_ROLLING_24H` \| `DAILY_LIMIT_CALENDAR_DAY` 枚举值之一
| time_rounding_type {data-indent=3} | string | 不满一小时取整方式<br/>`TIME_ROUND_UNKNOWN` \| `TIME_ROUND_DOWN` \| `TIME_ROUND_UP` 枚举值之一
| free_entry_duration {data-indent=3} | integer | 入场免费时间
| free_exit_duration {data-indent=3} | integer | 出场免费时间
| fixed_interval_rule {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 
| day_type {data-indent=4} | string | 日期类型<br/>`DAY_TYPE_UNKNOWN` \| `DAY_TYPE_WEEKDAY` \| `DAY_TYPE_HOLIDAY` \| `DAY_TYPE_ALL_DAY` 枚举值之一
| start_time {data-indent=4} | string | 时段开始时间
| end_time {data-indent=4} | string | 时段结束时间
| vehicle_type {data-indent=4} | string | 车辆类型<br/>`VEHICLE_TYPE_UNKNOWN` \| `VEHICLE_TYPE_SMALL` \| `VEHICLE_TYPE_LARGE` \| `VEHICLE_TYPE_EXTRA_LARGE` \| `VEHICLE_TYPE_ALL_TYPE` 枚举值之一
| plate_type {data-indent=4} | string | 车牌类型<br/>`PLATE_TYPE_UNKNOWN` \| `PLATE_TYPE_TEMPORARY` \| `PLATE_TYPE_MONTHLY` \| `PLATE_TYPE_FREE` \| `PLATE_TYPE_PREPAID` \| `PLATE_TYPE_OTHERS` 枚举值之一
| first_duration {data-indent=4} | integer | 首段收费时长
| first_amount {data-indent=4} | integer | 首段收费金额
| interval_duration {data-indent=4} | integer | 间隔收费时长
| interval_amount {data-indent=4} | integer | 间隔收费金额
| interval_max_amount {data-indent=4} | integer | 间隔时段收费封顶
| max_fee_per_day {data-indent=4} | integer | 单日最大收款金额
| free_period_charging_mode {data-indent=4} | string | 免费时段收取模式<br/>`FREE_PERIOD_CHARGING_UNKNOWN` \| `FREE_PERIOD_CHARGING_ONCE_PER_ENTRY` \| `FREE_PERIOD_CHARGING_ONCE_PER_24_HOURS` \| `FREE_PERIOD_CHARGING_ONCE_PER_CALENDAR_DAY` \| `FREE_PERIOD_CHARGING_CUMULATIVE_QUOTA_CALCULATION` 枚举值之一
| free_period_calculation_mode {data-indent=4} | string | 免费时段计算方式<br/>`FREE_PERIOD_CAL_UNKNOWN` \| `FREE_PERIOD_CAL_CONCURRENT_START` \| `FREE_PERIOD_CAL_SEQUENTIAL_START` 枚举值之一
| is_green_vehicle_free_parking {data-indent=4} | boolean | 新能源是否免停
| first_duration_mode {data-indent=4} | string | 首段收费模式<br/>`FIRST_DURATION_MODE_UNKNOWN` \| `FIRST_DURATION_MODE_ONLY_FIRST_DURATION` \| `FIRST_DURATION_MODE_EVERY_FIRST_DURATION` 枚举值之一
| duration_segment_rule {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 
| day_type {data-indent=4} | string | 日期类型<br/>`DAY_TYPE_UNKNOWN` \| `DAY_TYPE_WEEKDAY` \| `DAY_TYPE_HOLIDAY` \| `DAY_TYPE_ALL_DAY` 枚举值之一
| start_time {data-indent=4} | string | 时段开始时间
| end_time {data-indent=4} | string | 时段结束时间
| vehicle_type {data-indent=4} | string | 车辆类型<br/>`VEHICLE_TYPE_UNKNOWN` \| `VEHICLE_TYPE_SMALL` \| `VEHICLE_TYPE_LARGE` \| `VEHICLE_TYPE_EXTRA_LARGE` \| `VEHICLE_TYPE_ALL_TYPE` 枚举值之一
| plate_type {data-indent=4} | string | 车牌类型<br/>`PLATE_TYPE_UNKNOWN` \| `PLATE_TYPE_TEMPORARY` \| `PLATE_TYPE_MONTHLY` \| `PLATE_TYPE_FREE` \| `PLATE_TYPE_PREPAID` \| `PLATE_TYPE_OTHERS` 枚举值之一
| charge_mode {data-indent=4} | string | 收费模式<br/>`UNKNOWN` \| `INTERVAL` \| `ONE_TIME` 枚举值之一
| duration_from {data-indent=4} | integer | 停车时长起始
| duration_to {data-indent=4} | integer | 停车时长结束
| fixed_amount {data-indent=4} | integer | 固定收费金额
| interval_min {data-indent=4} | integer | 间隔时段
| interval_amount {data-indent=4} | integer | 间隔收费金额
| interval_max_amount {data-indent=4} | integer | 间隔时段收费封顶
| max_fee_per_day {data-indent=4} | integer | 单日最大收款金额
| pre_entry_rule {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 
| day_type {data-indent=4} | string | 日期类型<br/>`DAY_TYPE_UNKNOWN` \| `DAY_TYPE_WEEKDAY` \| `DAY_TYPE_HOLIDAY` \| `DAY_TYPE_ALL_DAY` 枚举值之一
| start_time {data-indent=4} | string | 时段开始时间
| end_time {data-indent=4} | string | 时段结束时间
| vehicle_type {data-indent=4} | string | 车辆类型<br/>`VEHICLE_TYPE_UNKNOWN` \| `VEHICLE_TYPE_SMALL` \| `VEHICLE_TYPE_LARGE` \| `VEHICLE_TYPE_EXTRA_LARGE` \| `VEHICLE_TYPE_ALL_TYPE` 枚举值之一
| plate_type {data-indent=4} | string | 车牌类型<br/>`PLATE_TYPE_UNKNOWN` \| `PLATE_TYPE_TEMPORARY` \| `PLATE_TYPE_MONTHLY` \| `PLATE_TYPE_FREE` \| `PLATE_TYPE_PREPAID` \| `PLATE_TYPE_OTHERS` 枚举值之一
| amount {data-indent=4} | integer | 收费金额
| max_fee_per_day {data-indent=4} | integer | 单日最大收款金额
| holiday_mode {data-indent=3} | string | 节假日模式<br/>`HOLIDAY_MODE_UNKNOWN` \| `HOLIDAY_MODE_LEGAL_MODY` \| `HOLIDAY_MODE_CALENDAR_MODY` \| `HOLIDAY_MODE_FINANCIAL_MODY` 枚举值之一
| aggregate_limit_mode {data-indent=3} | string | 累计限额模式<br/>`AGGREGATE_LIMIT_MODE_UNKNOWN` \| `AGGREGATE_LIMIT_MODE_NORMAL` \| `AGGREGATE_LIMIT_MODE_MIN` 枚举值之一
| first_charge_time_mode {data-indent=3} | string | 首次计费时间模式<br/>`FIRST_CHARGE_TIME_MODE_UNKNOWN` \| `FIRST_CHARGE_TIME_MODE_ENTER` \| `FIRST_CHARGE_TIME_MODE_AFTER_FREE` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->parking->reminders->application->postAsync([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/parking/reminders/application')->postAsync([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/parking/reminders/application']->postAsync([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->parking->reminders->application->post([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/parking/reminders/application')->post([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/parking/reminders/application']->post([
  'json' => [
    'parking_lot' => [
      'parking_lot_name'              => 'XX购物中心停车场',
      'out_parking_lot_id'            => 'PARK001',
      'parking_lot_address'           => 'XX市XX区XX路XX号',
      'longitude'                     => '116.397128',
      'latitude'                      => '39.916527',
      'parking_lot_type'              => 'PARKING_LOT_TYPE_BUSINESS_DISTRICT',
      'phone_number'                  => '13800138000',
      'parking_sign_url'              => 'https://example.com/parking_sign.jpg',
      'notification_text_list'        => ['string'],
      'payment_mini_prog_appid'       => 'wx1234567890abcdef',
      'payment_path'                  => 'pages/pay/index',
      'parking_order_mini_prog_appid' => 'wx1234567890abcdef',
      'parking_order_path'            => 'pages/order/index',
      'charging_rule'                 => [
        'rule_type'              => 'CHARGING_RULE_FIXED_INTERVAL',
        'fee_limit_type'         => 'FEE_LIMIT_AGGREGATE',
        'daily_limit_type'       => 'DAILY_LIMIT_CALENDAR_DAY',
        'time_rounding_type'     => 'TIME_ROUND_UP',
        'free_entry_duration'    => 30,
        'free_exit_duration'     => 15,
        'fixed_interval_rule'    => [[
          'day_type'                      => 'DAY_TYPE_WEEKDAY',
          'start_time'                    => '09:00',
          'end_time'                      => '18:00',
          'vehicle_type'                  => 'VEHICLE_TYPE_SMALL',
          'plate_type'                    => 'PLATE_TYPE_TEMPORARY',
          'first_duration'                => 60,
          'first_amount'                  => 500,
          'interval_duration'             => 30,
          'interval_amount'               => 200,
          'interval_max_amount'           => 1000,
          'max_fee_per_day'               => 5000,
          'free_period_charging_mode'     => 'FREE_PERIOD_CHARGING_ONCE_PER_ENTRY',
          'free_period_calculation_mode'  => 'FREE_PERIOD_CAL_SEQUENTIAL_START',
          'is_green_vehicle_free_parking' => true,
          'first_duration_mode'           => 'FIRST_DURATION_MODE_ONLY_FIRST_DURATION',
        ],],
        'duration_segment_rule'  => [[
          'day_type'            => 'DAY_TYPE_WEEKDAY',
          'start_time'          => '09:00',
          'end_time'            => '18:00',
          'vehicle_type'        => 'VEHICLE_TYPE_SMALL',
          'plate_type'          => 'PLATE_TYPE_TEMPORARY',
          'charge_mode'         => 'INTERVAL',
          'duration_from'       => 0,
          'duration_to'         => 60,
          'fixed_amount'        => 1000,
          'interval_min'        => 30,
          'interval_amount'     => 200,
          'interval_max_amount' => 1000,
          'max_fee_per_day'     => 5000,
        ],],
        'pre_entry_rule'         => [[
          'day_type'        => 'DAY_TYPE_WEEKDAY',
          'start_time'      => '09:00',
          'end_time'        => '18:00',
          'vehicle_type'    => 'VEHICLE_TYPE_SMALL',
          'plate_type'      => 'PLATE_TYPE_TEMPORARY',
          'amount'          => 1000,
          'max_fee_per_day' => 5000,
        ],],
        'holiday_mode'           => 'HOLIDAY_MODE_LEGAL_MODY',
        'aggregate_limit_mode'   => 'AGGREGATE_LIMIT_MODE_NORMAL',
        'first_charge_time_mode' => 'FIRST_CHARGE_TIME_MODE_ENTER',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| parking_lot_audit_no | string | 停车场进件审核单号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4019557780)
