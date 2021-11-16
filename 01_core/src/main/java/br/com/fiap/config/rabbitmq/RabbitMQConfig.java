package br.com.fiap.config.rabbitmq;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Exchange;
import org.springframework.amqp.core.ExchangeBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.QueueBuilder;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class RabbitMQConfig {

    public static final String METRICA_QUEUE = "metricaQueue";
    public static final String EXCHANGE_NAME = "fiap";
    public static final String ROUTING_KEY = "metrica";

    private final ConnectionFactory rabbitConnectionFactory;

    @Bean
    public Exchange declareExchange() {
        return ExchangeBuilder.directExchange(EXCHANGE_NAME)
            .durable(true)
            .build();
    }

    @Bean
    public Queue declareQueue() {
        return QueueBuilder.durable(METRICA_QUEUE)
            .build();
    }

    @Bean
    public Binding declareBinding(Exchange exchange, Queue queue) {
        return BindingBuilder.bind(queue)
            .to(exchange)
            .with(ROUTING_KEY)
            .noargs();
    }

    @Bean
    public RabbitTemplate getRabbitTemplate() {
        RabbitTemplate template = new RabbitTemplate(this.rabbitConnectionFactory);
        template.setExchange(EXCHANGE_NAME);
        template.setDefaultReceiveQueue(METRICA_QUEUE);
        template.setRoutingKey(ROUTING_KEY);
        template.setMessageConverter(new Jackson2JsonMessageConverter());
        return template;
    }

}
