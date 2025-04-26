---
title: 获取沙箱环境密钥
description: 仿真系统与生产环境完全独立，包括存储层。商户在仿真系统所做的所有交易（如下单、支付、查询）均为无资金流的假数据，即：用户无需真实扣款，商户也不会有资金入账。代金券同理，沙箱环境中无需商户真实制券与发券，亦不会出现真实扣券情况。
prev:
  text: 开放接口
  link: /openapi/
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| mch_id {data-required data-indent=1} | string {data-tooltip="最长32字符"} | 商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->xdc->apiv2getsignkey->sign->getsignkey->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/xdc/apiv2getsignkey/sign/getsignkey')->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/xdc/apiv2getsignkey/sign/getsignkey']->postAsync([
  'xml' => [
    'mch_id' => '1900000109',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->xdc->apiv2getsignkey->sign->getsignkey->post([
  'xml' => [
    'mch_id' => '1900000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/xdc/apiv2getsignkey/sign/getsignkey')->post([
  'xml' => [
    'mch_id' => '1900000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/xdc/apiv2getsignkey/sign/getsignkey']->post([
  'xml' => [
    'mch_id' => '1900000109',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string)$response->getBody()));
```
:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| mch_id {data-required} | string | 商户号
| sandbox_signkey | string | 沙箱密钥

{.im-table #response}

> [!IMPORTANT] 重要提示
> 1. *$instance* 构造实例化时，需要显式初始化 **secret** 字段，此为正式环境密钥；
> 2. 此接口请求时，会隐式按照[MD5数据签名算法](/guide/digital-signature#symmetric)进行签名，填充请求的*sign*字段;
> 3. 此接口有QPS限制(官方未公布)，高频请求会被官方重定向到腾讯[公益404](https://wx.gtimg.com/core/404.html)页面；
> 4. *sandbox_signkey* 具有时效性，时长官方未公布，建议缓存1个小时即可，请按需缓存；

参阅 [官方文档](https://pay.weixin.qq.com/doc/v2/merchant/4011984810)
