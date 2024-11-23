---
title: 申请扣款
description: 委托代扣可应用于定期扣款或需事后扣款以期提高效率的场景。例如高速，停车场等通过用户授权给商户，进行委托扣款的场景。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号id
| sub_appid {data-required data-indent=1} | string | 子商户公众账号id
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| sign_type {data-required data-indent=1} | string | 签名类型
| body {data-required data-indent=1} | string | 商品描述
| detail {data-indent=1} | string | 商品详情
| attach {data-indent=1} | string | 附加数据
| out_trade_no {data-required data-indent=1} | string | 商户订单号
| total_fee {data-required data-indent=1} | integer | 总金额
| fee_type {data-indent=1} | string | 货币类型
| spbill_create_ip {data-required data-indent=1} | string | 终端IP
| goods_tag {data-indent=1} | string | 商品标记
| notify_url {data-required data-indent=1} | string | 回调通知url
| trade_type {data-required data-indent=1} | string | 交易类型
| version {data-required data-indent=1} | string | 版本号
| trade_scene {data-required data-indent=1} | string | 交易场景
| openid {data-indent=1} | string | 用户标识
| profit_sharing {data-indent=1} | string | 分账标识
| scene_info {data-required data-indent=1} | string | 场景信息
| start_time {data-required data-indent=1} | string | 交易时间
| end_time {data-required data-indent=1} | string | 结束时间
| charging_time {data-required data-indent=1} | string | 计费时长
| plate_number {data-required data-indent=1} | string | 车牌号
| car_type {data-required data-indent=1} | string | 车辆类型
| parking_name {data-required data-indent=1} | string | 停车场名称
| deduct_mode {data-required data-indent=1} | string | 发起扣费方式
| support_deduct_mode {data-required data-indent=1} | string | 支持的扣费方式
| space_number {data-required data-indent=1} | string | 车位编号
| gas_station {data-required data-indent=1} | string | 加油站名称
| gas_label_name {data-required data-indent=1} | string | 油品标号名
| gas_type {data-required data-indent=1} | string | 油品类型名称
| gas_standard {data-required data-indent=1} | string | 油品标准
| gas_amount {data-required data-indent=1} | string | 油量
| gas_gun_no {data-required data-indent=1} | string | 油枪号
| entrance_name {data-required data-indent=1} | string | 入口站名称
| exit_name {data-required data-indent=1} | string | 出口名称
| carrying_capacity {data-indent=1} | string | 核载人数
| carrying_range {data-indent=1} | string | 核载区间
| channel_type {data-required data-indent=1} | string | 通道类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->vehicle->partnerpay->payapply->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/vehicle/partnerpay/payapply')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/vehicle/partnerpay/payapply']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->vehicle->partnerpay->payapply->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/vehicle/partnerpay/payapply')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/vehicle/partnerpay/payapply']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'sub_appid' => 'wxcbda96de0b165489',
    'mch_id' => '10000098',
    'sub_mch_id' => '1900000109',
    'sign_type' => 'HMAC-SHA256',
    'body' => '公交代扣',
    'detail' => '公交代扣：A公交代扣：B公交代扣：C',
    'attach' => '自定义参数',
    'out_trade_no' => '1217752501201407033233368018',
    'total_fee' => '888',
    'fee_type' => 'CNY',
    'spbill_create_ip' => '8.8.8.8',
    'goods_tag' => 'WXG',
    'notify_url' => 'http://yoursite.com/wxpay.html',
    'trade_type' => 'PAP',
    'version' => '3.0',
    'trade_scene' => 'PARKING',
    'openid' => 'oUpF8uMuAJO_M2pxb1Q9zNjWeS6o',
    'profit_sharing' => 'Y',
    'scene_info' => '{"scene_info":{"start_time":"20170926114339","end_time":"20170826114339","charging_time":"12312312312","plate_number":"CB1000sdfasd","free_time":"1200","car_type":"大型车","parking_name":"欢乐海岸停车场"}}',
    'start_time' => '20170826104339',
    'end_time' => '20170826114339',
    'charging_time' => '3600',
    'plate_number' => '粤B888888',
    'car_type' => '小型车',
    'parking_name' => '欢乐海岸停车场',
    'deduct_mode' => 'PROACTIVE',
    'support_deduct_mode' => 'DEDUCT_PROACTIVE_ONLY',
    'space_number' => 'D6666',
    'gas_station' => '中国石油加油站',
    'gas_label_name' => '98',
    'gas_type' => '汽油',
    'gas_standard' => '国V',
    'gas_amount' => '50120',
    'gas_gun_no' => '10',
    'entrance_name' => '沿江深圳-大铲湾',
    'exit_name' => '虎门大桥',
    'carrying_capacity' => '10',
    'carrying_range' => '6-12',
    'channel_type' => 'ETC',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required}| string | 返回状态码
| return_msg {data-required}| string | 返回信息
| appid {data-required}| string | 公众账号id
| sub_appid | string | 子商户公众账号id
| mch_id {data-required}| string | 商户号
| sub_mch_id {data-required}| string | 子商户号
| device_info | string | 设备号
| nonce_str {data-required}| string | 随机字符串
| sign {data-required}| string | 签名
| result_code {data-required}| string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/vehicle_v2_sl.php?chapter=20_982&index=2&p=202)
