---
title: 添加分账接收方
description: 服务商代子商户发起添加分账接收方请求，后续可通过发起分账请求将结算后的钱分到该分账接收方。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-indent=1} | string | 子商户号
| appid {data-required data-indent=1} | string | 公众账号ID
| sub_appid {data-indent=1} | string | 子商户公众账号ID
| sign_type {data-required data-indent=1} | string | 签名类型<br/>`HMAC-SHA256` 枚举值
| receiver {data-required data-indent=1} | string | 分账接收方`JSON`格式字符串
| {colspan=3 .im-table-line}
| type {data-required data-indent=2} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=2} | string | 分账接收方账号
| name {data-indent=2} | string | 分账个人接收方姓名
| relation_type {data-indent=2} | string | 与分账方的关系类型<br/>`SERVICE_PROVIDER` \| `STORE` \| `STAFF` \| `STORE_OWNER` \| `PARTNER` \| `HEADQUARTER` \| `BRAND` \| `DISTRIBUTOR` \| `USER` \| `SUPPLIER` \| `CUSTOM` \| `PLATFORM` \| `OTHERS` 枚举值之一
| custom_relation {data-indent=2} | string | 自定义的分账关系

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->profitsharingaddreceiver->postAsync([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/profitsharingaddreceiver')->postAsync([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/profitsharingaddreceiver']->postAsync([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->profitsharingaddreceiver->post([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/profitsharingaddreceiver')->post([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/profitsharingaddreceiver']->post([
  'xml' => [
    'mch_id'     => '1900000100',
    'sub_mch_id' => '1900000109',
    'appid'      => 'wx8888888888888888',
    'sub_appid'  => 'wx8888888888888888',
    'sign_type'  => 'HMAC-SHA256',
    'receiver'   => \json_encode([
      'type'            => 'MERCHANT_ID',
      'account'         => '190001001',
      'name'            => '示例商户全称',
      'relation_type'   => 'SERVICE_PROVIDER',
      'custom_relation' => '代理商',
    ]),
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| sub_appid | string | 子商户公众账号ID
| sub_mch_id | string | 子商户号
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| appid {data-required} | string | 公众账号ID
| mch_id {data-required} | string | 商户号
| nonce_str {data-required} | string | 随机字符串
| sign {data-required} | string | 签名
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| receiver {data-required} | string | 分账接收方
| {colspan=3 .im-table-line}
| type {data-required data-indent=1} | string | 分账接收方类型<br/>`MERCHANT_ID` \| `PERSONAL_OPENID` \| `PERSONAL_SUB_OPENID` 枚举值之一
| account {data-required data-indent=1} | string | 分账接收方账号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation.php?chapter=27_3&index=4) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/allocation_sl.php?chapter=25_3&index=4)
