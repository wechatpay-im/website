---
title: 配置查询
description: 服务商给特约子商户配置推荐关注、绑定关系和配置支付目录后可调用该API查询。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| nonceless {data-required} | `true` | 声明请求的`XML`无随机字符串参数
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| sub_mch_id {data-required data-indent=1} | string | 子商户号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->querysubdevconfig->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/querysubdevconfig')->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/querysubdevconfig']->postAsync([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->querysubdevconfig->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/querysubdevconfig')->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/querysubdevconfig']->post([
  'security' => true,
  'nonceless' => true,
  'xml' => [
    'appid'      => 'wx8888888888888888',
    'mch_id'     => '1900000109',
    'sub_mch_id' => '1900000100',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg {data-required} | string | 返回信息
| err_code {data-required} | string | 错误代码
| err_code_des {data-required} | string | 错误代码描述
| result_code {data-required} | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| sign {data-required} | string | 签名
| jsapi_path_list {data-required} | string | 授权目录
| appid_config_list {data-required} | string | 关联APPID与关注

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_25&index=4&p=901)
