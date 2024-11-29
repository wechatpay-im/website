---
title: 银行特约商户录入/银行特约商户资料查询
description: 银行服务商接入微信支付前需要将下属特约商户基本资料信息报备给微信，在微信支付侧生成特约商户识别码后方可提交微信支付。特约商户识别码是区分子商户交易、结算和清分的标志。提供给银行服务商报备后的商户查询。通过MCHID（识别码），返回商户全部资料信息。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| security {data-required} | `true` | 声明加载商户API证书
| xml {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`XML`数据结构
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| merchant_name {data-indent=1} | string | 商户名称
| sub_mch_id {data-indent=1} | string | 商户识别码
| page_index {data-required data-indent=1} | string | 页码
| page_size {data-indent=1} | string | 展示资料个数
| query {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的查询参数
| action {data-required data-indent=1} | string | `add` \| `query` 枚举值之一

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v2->secapi->mch->submchmanage->postAsync([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步声明式]
$instance->chain('v2/secapi/mch/submchmanage')->postAsync([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [异步属性式]
$instance['v2/secapi/mch/submchmanage']->postAsync([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v2->secapi->mch->submchmanage->post([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步声明式]
$response = $instance->chain('v2/secapi/mch/submchmanage')->post([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

```php [同步属性式]
$response = $instance['v2/secapi/mch/submchmanage']->post([
  'security' => true,
  'xml' => [
    'appid'         => 'wxd678efh567hg6787',
    'mch_id'        => '1230000109',
    'merchant_name' => '商户名称',
    'sub_mch_id'    => '1230000109',
    'page_index'    => '1',
    'page_size'     => '10',
  ],
  'query' => [
    'action' => 'add',
  ],
]);
print_r(\WeChatPay\Transformer::toArray((string) $response->getBody()));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| return_code {data-required} | string | 返回状态码<br/>`SUCCESS` \| `FAIL` 枚举值之一
| return_msg | string | 返回信息
| result_code | string | 业务结果<br/>`SUCCESS` \| `FAIL` 枚举值之一
| result_msg | string | 业务结果描述
| total {data-required} | string | 总记录数
| mchinfo {data-required} | object[] {data-tooltip="对应PHP的array"} | 商户信息列表
| appid {data-required data-indent=1} | string | 公众账号ID
| mch_id {data-required data-indent=1} | string | 商户号
| merchant_name {data-required data-indent=1} | string | 商户名称
| merchant_shortname {data-required data-indent=1} | string | 商户简称
| service_phone {data-required data-indent=1} | string | 客服电话
| contact {data-indent=1} | string | 联系人
| contact_phone {data-indent=1} | string | 联系电话
| contact_email {data-indent=1} | string | 联系邮箱
| business {data-required data-indent=1} | string | 经营类目
| channel_id {data-required data-indent=1} | string | 渠道商商户号
| channel_name {data-required data-indent=1} | string | 渠道商名称

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_21&index=3&p=9) [官方文档](https://pay.weixin.qq.com/wiki/doc/api/mch_bank.php?chapter=9_22&index=3&p=9)
