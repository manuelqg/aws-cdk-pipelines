#!/bin/bash
cdk bootstrap 900126642232/us-east-1 --no-bootstrap-customer-key --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' --profile devops
cdk bootstrap 984906628668/us-east-2 --no-bootstrap-customer-key --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' --trust 900126642232 --trust-for-lookup 900126642232 --profile dev
cdk bootstrap 034252551514/us-east-1 --no-bootstrap-customer-key --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' --trust 900126642232 --trust-for-lookup 900126642232 --profile stage
cdk bootstrap 581994098444/us-west-2 --no-bootstrap-customer-key --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' --trust 900126642232 --trust-for-lookup 900126642232 --profile prod
cdk bootstrap 581994098444/ca-central-1 --no-bootstrap-customer-key --cloudformation-execution-policies 'arn:aws:iam::aws:policy/AdministratorAccess' --trust 900126642232 --trust-for-lookup 900126642232 --profile prod

