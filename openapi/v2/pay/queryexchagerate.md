---
title: 汇率查询
description: 商户网站的商品以外币标价时，通过该接口可以实时查询到微信使用的转换汇率。汇率更新时间为北京时间上午10:00，一天更新一次。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| xml | object | 声明请求的`XML`数据结构
| appid {data-indent=1} | string | 公众账号ID
| mch_id {data-indent=1} | string | 商户号
| fee_type {data-indent=1} | string | 币种
| date {data-indent=1} | string | 日期
| nonceless | boolean | 声明请求的`XML`无随机字符串参数<br/>固定值`true`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->pay->queryexchagerate->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/pay/queryexchagerate')->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/pay/queryexchagerate']->postAsync([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->pay->queryexchagerate->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/pay/queryexchagerate')->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/pay/queryexchagerate']->post([
  'xml' => [
    'appid' => 'wxd678efh567hg6787',
    'mch_id' => '1230000109',
    'fee_type' => 'USD',
    'date' => '20150807',
  ],
  'nonceless' => true,
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
| sub_mch_id | string | 子商户号
| fee_type | string | 币种
| rate_time | string | 汇率时间
| rate | string | 现汇卖出价(汇率)
| sign | string | 签名

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/wxpay/ch/pay/In-AppPay/chapter8_10.shtml)
