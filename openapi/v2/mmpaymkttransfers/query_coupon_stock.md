---
title: 查询代金券批次
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| coupon_stock_id {data-indent=1} | string | 代金券批次id
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| op_user_id {data-indent=1} | string | 操作员
| device_info {data-indent=1} | string | 设备号
| version {data-indent=1} | string | 协议版本
| type {data-indent=1} | string | 协议类型

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->mmpaymkttransfers->query_coupon_stock->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/mmpaymkttransfers/query_coupon_stock')->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/mmpaymkttransfers/query_coupon_stock']->postAsync([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->mmpaymkttransfers->query_coupon_stock->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/mmpaymkttransfers/query_coupon_stock')->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/mmpaymkttransfers/query_coupon_stock']->post([
  'xml' => [
    'coupon_stock_id' => '1757',
    'appid' => 'wx5edab3bdfba3dc1c',
    'mch_id' => '10000098',
    'op_user_id' => '10000098',
    'device_info' => '',
    'version' => '1.0',
    'type' => 'XML',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| appid | string | 公众账号ID
| mch_id | string | 商户号
| device_info | string | 设备号
| nonce_str | string | 随机字符串
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| coupon_stock_id | string | 代金券批次ID
| coupon_name | string | 代金券名称
| coupon_value | integer | 代金券面额
| coupon_mininumn | integer | 代金券使用最低限额
| coupon_stock_status | integer | 代金券批次状态
| coupon_total | integer | 代金券数量
| max_quota | integer | 代金券最大领取数量
| is_send_num | integer | 代金券已经发送的数量
| begin_time | string | 生效开始时间
| end_time | string | 生效结束时间
| create_time | string | 创建时间
| coupon_budget | integer | 代金券预算额度
| begin_time_t | string | 生效开始时间
| end_time_t | string | 生效结束时间
| create_time_t | string | 创建时间

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/tools/sp_coupon.php?chapter=12_4&index=5)
