---
title: 设置会员服务项用户信息
description: 可根据用户当前的服务状态和信息，调用该接口更新当前用户的会员服务信息：包括展示在会员卡面上的服务信息和服务消息触达
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_id {data-required} | string | 会员卡id
| code {data-required} | string | 会员卡code
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| out_request_no {data-required data-indent=1} | string | 商户请求单号
| service_module_id {data-required data-indent=1} | string | 会员服务项ID
| state_setting {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 服务状态设置
| state_id {data-required data-indent=2} | string | 状态ID
| content_template_data {data-required data-indent=2} | object {data-tooltip="对应PHP的array"} | 内容模板设置
| field_list {data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 服务内容列表
| field_id {data-required data-indent=4} | string | 内容字段ID
| field_value {data-required data-indent=4} | string | 内容字段值
| action_setting {data-indent=3} | object {data-tooltip="对应PHP的array"} | 操作设置
| action_name {data-required data-indent=4} | string | 操作名称
| jump_miniprogram {data-required data-indent=4} | object {data-tooltip="对应PHP的array"} | 跳转小程序
| appid {data-required data-indent=5} | string | 小程序appid
| path {data-required data-indent=5} | string | 小程序path
| message_template_setting {data-indent=2} | object {data-tooltip="对应PHP的array"} | 消息模板设置
| message_template_id {data-required data-indent=3} | string | 模板消息ID
| field_list {data-required data-indent=3} | object[] {data-tooltip="对应PHP的array"} | 服务内容列表
| field_id {data-required data-indent=4} | string | 内容字段ID
| field_value {data-required data-indent=4} | string | 内容字段值

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->setServiceModuleData->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/set-service-module-data')->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/set-service-module-data']->postAsync([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r($response->getStatusCode() === 204);
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->membercardOpen->cards->_card_id_->codes->_code_->setServiceModuleData->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/membercard-open/cards/{card_id}/codes/{code}/set-service-module-data')->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

```php [同步属性式]
$response = $instance['v3/marketing/membercard-open/cards/{card_id}/codes/{code}/set-service-module-data']->post([
  'card_id' => 'pbLatjvWOibDc5-TBnbUk1pD12o0',
  'code' => '478515832665',
  'json' => [
    'out_request_no'    => '100002322019090134234sfdf',
    'service_module_id' => '666',
    'state_setting'     => [
      'state_id'                 => 'CHECKED_IN',
      'content_template_data'    => [
        'field_list'     => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
        'action_setting' => [
          'action_name'      => '一键开锁',
          'jump_miniprogram' => [
            'appid' => 'wx37178d097a6851d8',
            'path'  => 'pages/index/index',
          ],
        ],
      ],
      'message_template_setting' => [
        'message_template_id' => '9bJgRNz9XG248XZ-a0nDKH3Vt_vaTp32fRP1LWvxjzI',
        'field_list'          => [[
          'field_id'    => 'hotel_name',
          'field_value' => '深圳市南山区滨海路700号',
        ],],
      ],
    ],
  ],
]);
print_r($response->getStatusCode() === 204);
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| 空字符串(无返回内容) {align=center colspan=3}

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017166964) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017176090)
