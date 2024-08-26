---
title: 获取平台证书列表
description: 获取商户当前可用的平台证书列表。微信支付提供该接口，帮助商户后台系统实现平台证书的平滑更换。
---

# {{ $frontmatter.title }} {#get}

{{ $frontmatter.description }}

| 参数 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| query | array | 可选查询参数
| algorithm_type {data-indent=1} | string |平台证书算法类型<br/>`SM2`\|`RSA`\|`ALL`枚举值之一，默认为`RSA`

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->certificates->getAsync([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
])->wait();
```

```php [异步声明式]
$instance->chain('v3/certificates')->getAsync([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
])->wait();
```

```php [异步属性式]
$instance['v3/certificates']->getAsync([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
])->wait();
```

```php [同步纯链式]
$instance->v3->certificates->get([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
]);
```

```php [同步声明式]
$instance->chain('v3/certificates')->get([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
]);
```

```php [同步属性式]
$instance['v3/certificates']->get([
  'query' => [
    'algorithm_type' => 'SM2 | RSA | ALL',
  ],
]);
```
:::

| 字段 | 类型 {.type} | 描述 {.desc}
| -- | -- | --
| data | array[] | 平台证书列表
| serial_no {data-indent=1} | string | 证书序列号
| effective_time {data-indent=1} | string | 证书启用时间
| expire_time {data-indent=1} | string | 证书弃用时间
| encrypt_certificate {data-indent=1} | array | 证书信息
| algorithm {data-indent=2} | string | 加密证书的算法
| nonce {data-indent=2} | string | 加密证书的随机串
| associated_data {data-indent=2} | string | 加密证书的附加数据<br/>固定为`certificate`
| ciphertext {data-indent=2} | string | 加密后的证书内容

{.im-table #response}

参阅 [官方开发文档](https://wechatpay-api.gitbook.io/wechatpay-api-v3/jie-kou-wen-dang/ping-tai-zheng-shu) [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/ecommerce/applyments/chapter3_3.shtml)
