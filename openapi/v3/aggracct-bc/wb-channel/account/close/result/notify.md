---
title: 微众注销及解管完成通知
description: 仅微众技术商户可调用。微信支付将本次注销及解管结果可靠持久化成功后，应答 ret_msg 返回 SUCCESS。持久化由微信支付完成，调用方收到 SUCCESS 即表示该结果已保存。同一申请单使用相同的 result 和 finish_time 重复通知时，按幂等成功处理：不重复落库，仍返回 ret_msg=SUCCESS。同一申请单使用不同的 result 或 finish_time 重复通知时，不覆盖已保存结果，返回 400-INVALID_REQUEST。注销流程尚未进入等待通知阶段时接口返回失败，请稍后使用相同参数重试。接口限频：单接口100次/秒
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| mchid {data-required data-indent=1} | string | 商户号
| platform_trx_id {data-required data-indent=1} | string | 功能关闭变更申请单号
| result {data-required data-indent=1} | string | 完成结果
| finish_time {data-required data-indent=1} | string | 注销及解管完成时间
| bal_account_no {data-required data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 本次注销的支用台账号
| card_no {data-indent=1} | string {data-tooltip=微信支付公钥/平台证书加密后的BASE64字符串 data-encrypted=by-rsa-pubkey} | 本次注销卡号
| sgn_no {data-indent=1} | string | 本次注销商户子账户协议号
| req_scene {data-required data-indent=1} | string | 请求场景<br/>`SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT` \| `SJT_MICRO_MERCHANT` \| `WX_SHOP_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT` 枚举值之一
| headers {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的头参数
| Wechatpay-Serial {data-required data-indent=1} | string | 微信支付公钥ID/平台证书序列号

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->aggracctBc->wbChannel->account->close->result->notify->postAsync([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/aggracct-bc/wb-channel/account/close/result/notify')->postAsync([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/aggracct-bc/wb-channel/account/close/result/notify']->postAsync([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->aggracctBc->wbChannel->account->close->result->notify->post([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/aggracct-bc/wb-channel/account/close/result/notify')->post([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/aggracct-bc/wb-channel/account/close/result/notify']->post([
  'json' => [
    'mchid'           => '1900016681',
    'platform_trx_id' => '11117742499090086455469010028373',
    'result'          => 'SUCCESS',
    'finish_time'     => '2015-05-20T13:29:35+08:00',
    'bal_account_no'  => 'Cf80Dpbwo2cexDDB2k5W/DZyefMg8nCvBgty1OCebYcg',
    'card_no'         => 'FMbf1tn2F0NRYCJp1BW76oVoMuzBL00kPke7D',
    'sgn_no'          => '20240520153000001234',
    'req_scene'       => 'SJT_CONVENIENT_SETTLEMENT_SERVICE_MERCHANT',
  ],
  'headers' => [
    'Wechatpay-Serial' => 'PUB_KEY_ID_0114232134912410000000000000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| ret_msg | string | 接口返回信息

{.im-table #response}
