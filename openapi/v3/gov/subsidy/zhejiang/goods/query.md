---
title: 商品信息查询
description: 商品信息查询
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| goods_bar_code {data-indent=1} | string | 商品条码
| province {data-indent=1} | string | 省份代码
| req_ssn {data-required data-indent=1} | string | 请求流水号
| req_time {data-indent=1} | string | 请求时间

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->gov->subsidy->zhejiang->goods->query->postAsync([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/gov/subsidy/zhejiang/goods/query')->postAsync([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/gov/subsidy/zhejiang/goods/query']->postAsync([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->gov->subsidy->zhejiang->goods->query->post([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/gov/subsidy/zhejiang/goods/query')->post([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/gov/subsidy/zhejiang/goods/query']->post([
  'json' => [
    'goods_bar_code' => '',
    'province'       => '',
    'req_ssn'        => '123',
    'req_time'       => '',
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| resp_code {data-required} | string | 响应码
| resp_desc {data-required} | string | 响应描述
| goods_bar_code {data-required} | string | 商品条码
| seq_id {data-required} | string | 本记录唯一ID
| province {data-required} | string | 省份代码
| code_type {data-required} | string | 条码类型<br/>`001` \| `002` 枚举值之一
| goods_type {data-required} | string | 商品品类
| goods_name {data-required} | string | 商品名称
| logo_name {data-required} | string | 品牌名称
| goods_model {data-required} | string | 商品型号
| basis_price {data-required} | string | 基准价格
| manufact_cert_code {data-required} | string | 厂商统一社会信用代码
| manufact_price {data-required} | string | 厂商指导零售价
| energy_effciency | string | 能效标识
| energy_reg_code | string | 能效备案编号
| energy_reg_model | string | 能效备案型号
| reg_3c_code | string | 3C 认证编号
| water_effciency | string | 水效标识
| expire_date | string | 有效期
| description | string | 产品描述
| gpc | string | gpc 分类代码
| net_content | string | 净含量
| unit_code | string | 净含量单位代码
| origin | string | 原产国
| city | string | 市级区域代码
| county | string | 区县区域代码
| data_state | string | 数据状态
| remark | string | 备注
| upload_state | string | 上送状态
| expire_time | string | 失效时间
| is_ai_product | string | 是否 AI 产品
| device_type | string | 设备类型
| manufact_code | string | 厂商识别代码
| manufact_login_date | string | 厂商注册日期
| manufact_logout_date | string | 厂商失效日期
| manufact_logout_flag | string | 厂商失效标识
| manufact_register_addr | string | 厂商注册地址
| manufact_valid_date | string | 厂商过期日期
| manufact_firm_name | string | 厂商企业名称
| price_unit | string | 企业定价单位
| sale_date | string | 上市日期
| pc_type | string | PC 类型
| msg_src_platform | string | 上送平台编码

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/partner/4013989530)
