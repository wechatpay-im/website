---
title: 修改结算银行卡
description: 
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

::: danger :no_entry_sign: {.im-deprecated}

本接口服务已于 `2023.03.13` (北京时间)下线，文档仅做留存参考。
:::

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| version {data-indent=1} | string | 接口版本号
| mch_id {data-indent=1} | string | 商户号
| sign_type {data-indent=1} | string | 签名类型
| sub_mch_id {data-indent=1} | string | 小微商户号
| account_number {data-indent=1} | string | 银行卡号
| bank_name {data-indent=1} | string | 开户银行全称（含支行）
| account_bank {data-indent=1} | string | 开户银行
| bank_address_code {data-indent=1} | string | 开户银行省市编码
| cert_sn {data-indent=1} | string | 平台证书序列号
| security | boolean | 声明加载商户API证书<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->applyment->micro->modifyarchives->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/applyment/micro/modifyarchives')->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/applyment/micro/modifyarchives']->postAsync([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->applyment->micro->modifyarchives->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/applyment/micro/modifyarchives')->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/applyment/micro/modifyarchives']->post([
  'xml' => [
    'version' => '1.0',
    'mch_id' => '1230000109',
    'sign_type' => 'HMAC-SHA256',
    'sub_mch_id' => '1230000109',
    'account_number' => '',
    'bank_name' => '深圳农村商业银行xxx支行',
    'account_bank' => '中国银行',
    'bank_address_code' => '110000',
    'cert_sn' => '5430056GFRJK54YTFF653GDFH09HFGHF',
  ],
  'security' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code | string | 返回状态码
| return_msg | string | 返回信息
| nonce_str | string | 随机字符串
| sign | string | 签名
| result_code | string | 业务结果
| err_code | string | 错误代码
| err_code_des | string | 错误代码描述
| mch_id | string | 商户号
| sub_mch_id | string | 小微商户号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=21_2)
