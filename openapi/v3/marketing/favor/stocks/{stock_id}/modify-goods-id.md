---
title: 修改可用单品编码
description: 可通过该接口修改增删商品编码，至少需要保留一个商品编码。
---

# {{ $frontmatter.title }} {#post}

{{ $frontmatter.description }}

| 请求参数 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| stock_id {data-required} | string | 批次号
| json {data-required} | object {data-tooltip="对应PHP的array"} | 声明请求的`JSON`数据结构
| stock_creator_mchid {data-required data-indent=1} | string | 创建批次的商户号
| add_goods_id_list {data-indent=1} | string[] | 增加单品编码列表
| delete_goods_id_list {data-indent=1} | string[] | 删除单品编码列表

{.im-table #request}

::: code-group

```php [异步纯链式]
$instance->v3->marketing->favor->stocks->_stock_id_->modifyGoodsId->postAsync([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步声明式]
$instance->chain('v3/marketing/favor/stocks/{stock_id}/modify-goods-id')->postAsync([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [异步属性式]
$instance['v3/marketing/favor/stocks/{stock_id}/modify-goods-id']->postAsync([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
])
->then(static function(\Psr\Http\Message\ResponseInterface $response) {
  print_r(json_decode((string) $response->getBody(), true));
})
->wait();
```

```php [同步纯链式]
$response = $instance->v3->marketing->favor->stocks->_stock_id_->modifyGoodsId->post([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步声明式]
$response = $instance->chain('v3/marketing/favor/stocks/{stock_id}/modify-goods-id')->post([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

```php [同步属性式]
$response = $instance['v3/marketing/favor/stocks/{stock_id}/modify-goods-id']->post([
  'stock_id' => '9865000',
  'json' => [
    'stock_creator_mchid'  => '8956000',
    'add_goods_id_list'    => ['8956000'],
    'delete_goods_id_list' => ['8956000'],
  ],
]);
print_r(json_decode((string) $response->getBody(), true));
```

:::

| 返回字典 | 类型 {.type} | 描述 {.desc}
| --- | --- | ---
| pause_time {data-required} | string | 生效时间
| stock_id {data-required} | string | 批次号

{.im-table #response}

参阅 [官方文档](https://pay.weixin.qq.com/doc/v3/merchant/4017164667)
