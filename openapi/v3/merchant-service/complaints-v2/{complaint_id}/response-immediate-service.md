---
title: 回复需要即时服务的投诉单
description: 商户可通过调用此接口，针对需要即时服务的投诉单（need_immediate_service为true）提交内容回复用户。此接口支持使用新版消息格式（NormalMessage），可发送富文本、图片、按钮组等多种消息类型。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| complaint_id {data-required} | string | 投诉单号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| complainted_mchid {data-required data-indent=1} | string | 被诉商户号
| message {data-required data-indent=1} | object {data-tooltip="对应PHP的array"} | 消息内容
| blocks {data-indent=2} | object[] {data-tooltip="对应PHP的array"} | 消息内容
| type {data-indent=3} | string | 消息块类型<br/>`TEXT` \| `IMAGE` \| `LINK` \| `FAQ_LIST` \| `BUTTON` \| `BUTTON_GROUP` 枚举值之一
| text {data-indent=3} | object {data-tooltip="对应PHP的array"} | 文本
| text {data-indent=4} | string | 文本
| color {data-indent=4} | string | 文本颜色<br/>`DEFAULT` \| `SECONDARY` 枚举值之一
| is_bold {data-indent=4} | boolean | 是否粗体
| image {data-indent=3} | object {data-tooltip="对应PHP的array"} | 图片
| media_id {data-indent=4} | string | 媒体ID
| image_style_type {data-indent=4} | string | 图片样式类型<br/>`IMAGE_STYLE_TYPE_NARROW` \| `IMAGE_STYLE_TYPE_WIDE` 枚举值之一
| link {data-indent=3} | object {data-tooltip="对应PHP的array"} | 链接
| text {data-indent=4} | string | 文本
| action {data-indent=4} | object {data-tooltip="对应PHP的array"} | 动作
| action_type {data-indent=5} | string | 动作类型<br/>`ACTION_TYPE_SEND_MESSAGE` \| `ACTION_TYPE_JUMP_URL` \| `ACTION_TYPE_JUMP_MINI_PROGRAM` 枚举值之一
| jump_url {data-indent=5} | string | 跳转链接
| mini_program_jump_info {data-indent=5} | object {data-tooltip="对应PHP的array"} | 跳转小程序信息
| appid {data-required data-indent=6} | string | 跳转小程序APPID
| path {data-required data-indent=6} | string | 跳转小程序页面PATH
| text {data-required data-indent=6} | string | 跳转小程序页面名称
| message_info {data-indent=5} | object {data-tooltip="对应PHP的array"} | 回复消息内容
| content {data-required data-indent=6} | string | 回复的消息内容
| custom_data {data-indent=6} | string | 自定义透传字段
| action_id {data-indent=5} | string | 动作id
| invalid_info {data-indent=4} | object {data-tooltip="对应PHP的array"} | 失效配置
| expired_time {data-indent=5} | string | 过期时间
| multi_clickable {data-indent=5} | boolean | 是否可以多次点击
| faq_list {data-indent=3} | object {data-tooltip="对应PHP的array"} | FAQ列表
| faqs {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | FAQ列表
| faq_id {data-indent=5} | string | faq的id
| faq_title {data-indent=5} | string | faq内容
| action {data-indent=5} | object {data-tooltip="对应PHP的array"} | 动作
| action_type {data-indent=6} | string | 动作类型<br/>`ACTION_TYPE_SEND_MESSAGE` \| `ACTION_TYPE_JUMP_URL` \| `ACTION_TYPE_JUMP_MINI_PROGRAM` 枚举值之一
| jump_url {data-indent=6} | string | 跳转链接
| mini_program_jump_info {data-indent=6} | object {data-tooltip="对应PHP的array"} | 跳转小程序信息
| appid {data-required data-indent=7} | string | 跳转小程序APPID
| path {data-required data-indent=7} | string | 跳转小程序页面PATH
| text {data-required data-indent=7} | string | 跳转小程序页面名称
| message_info {data-indent=6} | object {data-tooltip="对应PHP的array"} | 回复消息内容
| content {data-required data-indent=7} | string | 回复的消息内容
| custom_data {data-indent=7} | string | 自定义透传字段
| action_id {data-indent=6} | string | 动作id
| button {data-indent=3} | object {data-tooltip="对应PHP的array"} | 按钮
| text {data-indent=4} | string | 文本
| action {data-indent=4} | object {data-tooltip="对应PHP的array"} | 动作
| action_type {data-indent=5} | string | 动作类型<br/>`ACTION_TYPE_SEND_MESSAGE` \| `ACTION_TYPE_JUMP_URL` \| `ACTION_TYPE_JUMP_MINI_PROGRAM` 枚举值之一
| jump_url {data-indent=5} | string | 跳转链接
| mini_program_jump_info {data-indent=5} | object {data-tooltip="对应PHP的array"} | 跳转小程序信息
| appid {data-required data-indent=6} | string | 跳转小程序APPID
| path {data-required data-indent=6} | string | 跳转小程序页面PATH
| text {data-required data-indent=6} | string | 跳转小程序页面名称
| message_info {data-indent=5} | object {data-tooltip="对应PHP的array"} | 回复消息内容
| content {data-required data-indent=6} | string | 回复的消息内容
| custom_data {data-indent=6} | string | 自定义透传字段
| action_id {data-indent=5} | string | 动作id
| invalid_info {data-indent=4} | object {data-tooltip="对应PHP的array"} | 失效配置
| expired_time {data-indent=5} | string | 过期时间
| multi_clickable {data-indent=5} | boolean | 是否可以多次点击
| button_group {data-indent=3} | object {data-tooltip="对应PHP的array"} | 按钮组
| buttons {data-indent=4} | object[] {data-tooltip="对应PHP的array"} | 按钮组
| text {data-indent=5} | string | 文本
| action {data-indent=5} | object {data-tooltip="对应PHP的array"} | 动作
| action_type {data-indent=6} | string | 动作类型<br/>`ACTION_TYPE_SEND_MESSAGE` \| `ACTION_TYPE_JUMP_URL` \| `ACTION_TYPE_JUMP_MINI_PROGRAM` 枚举值之一
| jump_url {data-indent=6} | string | 跳转链接
| mini_program_jump_info {data-indent=6} | object {data-tooltip="对应PHP的array"} | 跳转小程序信息
| appid {data-required data-indent=7} | string | 跳转小程序APPID
| path {data-required data-indent=7} | string | 跳转小程序页面PATH
| text {data-required data-indent=7} | string | 跳转小程序页面名称
| message_info {data-indent=6} | object {data-tooltip="对应PHP的array"} | 回复消息内容
| content {data-required data-indent=7} | string | 回复的消息内容
| custom_data {data-indent=7} | string | 自定义透传字段
| action_id {data-indent=6} | string | 动作id
| invalid_info {data-indent=5} | object {data-tooltip="对应PHP的array"} | 失效配置
| expired_time {data-indent=6} | string | 过期时间
| multi_clickable {data-indent=6} | boolean | 是否可以多次点击
| button_layout {data-indent=4} | string | 按钮布局方式<br/>`LAYOUT_UNKNOWN` \| `LAYOUT_HORIZONTAL` \| `LAYOUT_VERTICAL` 枚举值之一
| invalid_info {data-indent=4} | object {data-tooltip="对应PHP的array"} | 失效配置
| expired_time {data-indent=5} | string | 过期时间
| multi_clickable {data-indent=5} | boolean | 是否可以多次点击
| sender_identity {data-indent=2} | string | 发送者身份类别<br/>`UNKNOWN` \| `MANUAL` \| `MACHINE` 枚举值之一
| custom_data {data-indent=2} | string | 自定义透传信息
| idempotent_id {data-required data-indent=1} | string | 幂等ID

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->merchantService->complaintsV2->_complaint_id_->responseImmediateService->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/response-immediate-service')->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/merchant-service/complaints-v2/{complaint_id}/response-immediate-service']->postAsync([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->merchantService->complaintsV2->_complaint_id_->responseImmediateService->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/merchant-service/complaints-v2/{complaint_id}/response-immediate-service')->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/merchant-service/complaints-v2/{complaint_id}/response-immediate-service']->post([
  'complaint_id' => '200201820200101080076610000',
  'json' => [
    'complainted_mchid' => '1900012181',
    'message'           => [
      'blocks'          => [[
        'type'         => 'TEXT',
        'text'         => [
          'text'    => 'example_text',
          'color'   => 'DEFAULT',
          'is_bold' => true,
        ],
        'image'        => [
          'media_id'         => 'example_media_id',
          'image_style_type' => 'IMAGE_STYLE_TYPE_NARROW',
        ],
        'link'         => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'faq_list'     => [
          'faqs' => [[
            'faq_id'    => 'example_faq_id',
            'faq_title' => 'example_faq_title',
            'action'    => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
          ],],
        ],
        'button'       => [
          'text'         => 'example_text',
          'action'       => [
            'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
            'jump_url'               => 'example_jump_url',
            'mini_program_jump_info' => [
              'appid' => 'example_appid',
              'path'  => 'example_path',
              'text'  => 'example_text',
            ],
            'message_info'           => [
              'content'     => 'example_content',
              'custom_data' => 'example_custom_data',
            ],
            'action_id'              => 'example_action_id',
          ],
          'invalid_info' => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
        'button_group' => [
          'buttons'       => [[
            'text'         => 'example_text',
            'action'       => [
              'action_type'            => 'ACTION_TYPE_SEND_MESSAGE',
              'jump_url'               => 'example_jump_url',
              'mini_program_jump_info' => [
                'appid' => 'example_appid',
                'path'  => 'example_path',
                'text'  => 'example_text',
              ],
              'message_info'           => [
                'content'     => 'example_content',
                'custom_data' => 'example_custom_data',
              ],
              'action_id'              => 'example_action_id',
            ],
            'invalid_info' => [
              'expired_time'    => '2015-05-20T13:29:35+08:00',
              'multi_clickable' => true,
            ],
          ],],
          'button_layout' => 'LAYOUT_HORIZONTAL',
          'invalid_info'  => [
            'expired_time'    => '2015-05-20T13:29:35+08:00',
            'multi_clickable' => true,
          ],
        ],
      ],],
      'sender_identity' => 'UNKNOWN',
      'custom_data'     => 'example_custom_data',
    ],
    'idempotent_id'     => '550e8400-e29b-41d4-a716-446655440000',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| log_id | string | 操作流水号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017151596) [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4017151726)
