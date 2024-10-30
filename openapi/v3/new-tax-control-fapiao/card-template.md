---
title: 创建电子发票卡券模板
description: 为商户创建电子发票的卡券模板，该卡券模板在开具的电子发票插入微信用户卡包时使用。调用该接口将覆盖商户之前配置的电子发票卡券模板。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json | object | 声明请求的`JSON`数据结构
| sub_mchid {data-indent=1} | string | 子商户号
| card_appid {data-indent=1} | string | 插卡公众号AppID
| card_template_information {data-indent=1} | object | 卡券模板信息
| payee_name {data-indent=2} | string | 收款方名称
| logo_url {data-indent=2} | string | 卡券logo地址
| custom_cell {data-indent=2} | object | 卡券自定义cell位配置
| words {data-indent=3} | string | cell位文字
| description {data-indent=3} | string | cell位描述
| jump_url {data-indent=3} | string | 点击cell位跳转的地址
| miniprogram_user_name {data-indent=3} | string | 点击cell位跳转的小程序的用户名
| miniprogram_path {data-indent=3} | string | 点击cell位跳转的小程序的页面路径

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->newTaxControlFapiao->cardTemplate->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/new-tax-control-fapiao/card-template')->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/new-tax-control-fapiao/card-template']->postAsync([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->newTaxControlFapiao->cardTemplate->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/new-tax-control-fapiao/card-template')->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/new-tax-control-fapiao/card-template']->post([
  'json' => [
    'sub_mchid' => '1900000109',
    'card_appid' => 'wxb1170446a4c0a5a2',
    'card_template_information' => [
      'payee_name' => '某公司',
      'logo_url' => 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZJkmG8xXhiaHqkKSVMMWeN3hLut7X7hicFNjakmxibMLGWpXrEXB33367o7zHN0CwngnQY7zb7g/0',
      'custom_cell' => [
        'words' => '电子发票',
        'description' => '查看发票',
        'jump_url' => 'http://www.qq.com',
        'miniprogram_user_name' => 'gh_86a091e50ad4@app',
        'miniprogram_path' => 'pages/xxxPage',
      ],
    ],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| card_appid | string | 插卡公众号AppID
| card_id | string | 卡券模板id

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/new-tax-control-fapiao/chapter3_4.shtml)
