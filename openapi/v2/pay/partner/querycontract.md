---
title: 查询签约关系
description: 查询签约关系接口提供单笔签约关系查询。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 应用ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_appid {data-indent=1} | string | 子商户应用ID
| sub_mch_id {data-required data-indent=1} | string | 子商户号
| contract_id {data-indent=1} | string | 委托代扣协议id
| plan_id {data-indent=1} | string | 模板id
| contract_code {data-indent=1} | string | 签约协议号
| version {data-required data-indent=1} | string | 版本号
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->partner->querycontract->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/partner/querycontract')->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/partner/querycontract']->postAsync([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->partner->querycontract->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/partner/querycontract')->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/partner/querycontract']->post([
  'xml' => [
    'appid' => 'wxcbda96de0b165486',
    'mch_id' => '1200009811',
    'sub_appid' => 'wxcbda96de0b165489',
    'sub_mch_id' => '1900000109',
    'contract_id' => '100005698',
    'plan_id' => '123',
    'contract_code' => '1023658866',
    'version' => '1.0',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay_v2/papay/chapter5_7.shtml)
